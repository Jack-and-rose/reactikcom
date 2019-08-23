import React from 'react';
import Home from '@pages/home.jsx';
import Login from '@pages/login.jsx';
import Main from '@layouts/main.jsx';
import Loginout from '@pages/loginout.jsx';
import Testrouter from '@pages/testrouter.jsx';
//import { Router } from "react-router";
import { BrowserRouter,Router, Route,Link,Switch } from 'react-router-dom'

const routes = [
    // {
    //     path:"/",
    //     extat: true,
    //     component: Main,

    // }
    {
        path:"/login",
        extat: true,
        component: Login,

    }
    ,{
        path:"/home",
        extat: true,
        component: Home,

    }
    ,{
        path:"/testrouter",
        extat: true,
        component: Testrouter,

    }
    ,{
        path:"/loginout",
        extat: true,
        component: Loginout,
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
                         
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
