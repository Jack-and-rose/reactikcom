import React from 'react';
import Home from '@pages/home.jsx';
import Login from '@pages/login.jsx';
import Loginout from '@pages/loginout.jsx';
import Testrouter from '@pages/testrouter.jsx';
//import { Router } from "react-router";
import { BrowserRouter,Router, Route,Link,Switch } from 'react-router-dom'

const routes = [
    {
        path:"/home",
        extat: true,
        component: Home,

    },
    {
        path:"/login",
        extat: true,
        component: Login,

    },
    {
        path:"/loginout",
        extat: true,
        component: Loginout,
    },
    {
        path:"/testrouter",
        extat: true,
        component: Testrouter,

    }
]

class App extends React.Component {
    render() {
        return (
            <BrowserRouter baseName="http://localhost:9000">
                <div>
                    {
                        
                            routes.map((route,index)=>(
                                <Route key={index} extat={route.extat}  path={route.path} component={route.component} />
                            ))
                        
                    }
                    {/* <Route exact path="/" render={() => (
                              <Redirect to="/home"/>
                            ) 
                          )}/>  */}
                         
                </div>
                
            </BrowserRouter>
        )
    }
}

export default App;
