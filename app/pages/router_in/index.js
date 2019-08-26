import React from 'react';
import Main from '@layouts/main.jsx';
import RouterManager from '@pages/router_in/routermanager.jsx';
import { BrowserRouter,Router, Route,Link,Switch } from 'react-router-dom'

class RouterIn extends React.Component {
    render() {
      const {match, location } = this.props;
        return (
            <Main>
              <Switch>
                <Route exact path="/router_in/routermanager" component={RouterManager} />
              </Switch>
            </Main>
        )
    }
}

export default RouterIn;
