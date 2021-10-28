/*import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Number from './API/Number';
import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
import NumberForm from './Component/NumberForm';
import NewFeed from './Component/NewFeed';
function App() {
  
  return ( 
    <BrowserRouter>
    <div className="container">
     <Navbar bg="dark" >
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Nav>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                    Home
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/Trending">
                    Trending
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/Number">
                    Number
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/Login">
                    Login
                </NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/SignUp">
                    Signup
                </NavLink>
                </Nav>
            </Navbar>

     <Switch>
       <Route path='/number' component={NumberForm}/>
       <Route path='/trending' component={NewFeed}/>
     </Switch>
    </div>
    </BrowserRouter>   
  );
}

export default App;*/
import React from 'react';
import './App.css';
import 'antd/dist/antd.css';

import AppHeader from './components/common/header';
import AppFooter from './components/common/footer';
import AppHome from './views/home';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader/>
      </Header>
      <Content>
        <AppHome/>
      </Content>
      <Footer>
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default App;
