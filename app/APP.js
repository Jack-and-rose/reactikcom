import React from 'react';
import Home from '@pages/home.jsx';
import Login from '@pages/login.jsx';
import Main from '@layouts/main.jsx';
import Loginout from '@pages/loginout.jsx';
import BlackHoleSys from '@pages/blackHoleSys/index.js';
import RouterIn from '@pages/router_in/index.js';
//import { Router } from "react-router";
import { BrowserRouter,Router, Route,Link,Switch,Redirect } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter baseName="http://localhost:9000">
                <Switch>
                <Route key="login" exact path="/login" component={Login} />
                    <Route key="loginout" exact path="/loginout" component={Loginout} />
                    <Route key="home" exact path="/home" component={Home} />
                    {/* <AuthorizedRoute path="/layout" component={Layout} /> */}
                    <Route key="mian" exact path="/" component={Main} />
                    <Route path="/blackHoleSys" component={BlackHoleSys} />
                    <Route path="/router_in" component={RouterIn} />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
