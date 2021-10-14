
import { Button } from "antd/lib/radio";
import { Component } from "react";
import 'antd/dist/antd.css';
import { BrowserRouter, Switch,Route, NavLink } from "react-router-dom";
import NumberForm from "./NumberForm";
import NewArticleForm from "./NewArticleForm";
export class NewFeed extends Component{
    
    render()
    {
        return(
            <div>
                <BrowserRouter>
                    <NavLink type="link" to="/NewArticle">
                        <Button>+</Button>
                    </NavLink>
                    <NavLink type="link" to="/Back">
                        <Button style={{position: 'absolute', right : '15%'}}>
                            back</Button>
                    </NavLink>
                    <Switch>
                 <Route path='/NewArticle' component={NewArticleForm}/>
                 <Route path='/Back' />
                </Switch>
                </BrowserRouter>
                
            </div>
        )
        
    }
}

export default NewFeed;