
import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import AppHeader from './components/common/header';
import AppFooter from './components/common/footer';
import AppHome from './views/home';

import { Layout } from 'antd';
import { Redirect, Route, Router, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import NewArticleForm from './MyComponent/NewArticleForm';
import MainPage from './components/MainPage/MainPage';
import { ReadArticle } from './components/Read/ReadArticle';
import UserDetail from './components/User/UserDetail';
const { Header, Content, Footer } = Layout;
const sample = 'https://spiderum.com/api/v1/post/Nhung-thu-phu-phiem-v3h';

function App() {

  const CustomRoute = ({ component: Component, sample, ...rest}) => {
    return(
        <Route 
            {...rest}
            //route has a render prop that lets you create a component in-line with the route
            render = {props =>
                sample === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/Read"/>
                )
            }
        />
    )
}
  return (
    <div>
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>
      </Header>    
           
    </Layout>
    <BrowserRouter>
    <div className="container">       
     <Switch>
        <Route path='/Home' component={AppHome}/>
        <Route path='/NewArticle' component={NewArticleForm }/>
        <Route path='/MainPage' component={MainPage }/>
        <Route path='/Read' component={ReadArticle }/>
        <Route path='/User' component={UserDetail }/>
        <CustomRoute path={"Read"+sample} component={ReadArticle} sample={sample}/>
     </Switch>
    </div>
    </BrowserRouter>   
    </div>
  );
}

export default App;
