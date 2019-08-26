import React from 'react';
import Main from '@layouts/main.jsx';
import Traction from '@pages/blackHoleSys/traction.jsx';
import Monitor from '@pages/blackHoleSys/monitor.jsx';
import { BrowserRouter,Router, Route,Link,Switch } from 'react-router-dom'

const elem = <h1>dsada</h1>;
class BlackHoleSys extends React.Component {
    render() {
      const {match, location } = this.props;
        return (
            <div className="page-wraper app-page sidemenu-show sidemenu-collapse sidemenu-none"> 
              <Main>
                <Switch>
                  {/* <Route exact path="/blackHoleSys" component={Traction} /> */}
                  <Route exact path="/blackHoleSys/traction" component={Traction} />
                  <Route exact path="/blackHoleSys/monitor" component={Monitor} />
                </Switch> 
              </Main>
            </div>
        )
    }
}

export default BlackHoleSys;
