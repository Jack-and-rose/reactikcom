import React from 'react';
import Main from '@layouts/main.jsx';
import RouterManager from '@pages/router_in/routermanager.jsx';
import { BrowserRouter,Router, Route,Link,Switch } from 'react-router-dom'

class RouterIn extends React.Component {
    render() {
      const {match, location } = this.props;
      const { username } = this.state;
        return (
            <div className="page-wraper app-page sidemenu-show sidemenu-collapse sidemenu-none">  
                <Switch>
                  <Route exact path="/routermanager" component={RouterManager} />
                </Switch>  
            </div>
        )
    }
}

export default RouterIn;
