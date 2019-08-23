import React from 'react';
import Main from '@layouts/main.jsx';
const elem = <h1>dsada</h1>;
class Home extends React.Component {
    render() {
        return (
            <div className="page-wraper app-page sidemenu-show sidemenu-collapse sidemenu-none"> 
              <Main>
                ·¶µÂÈø·¶µÂÈø
                {elem}
              </Main>
            </div>
        )
    }
}

export default Home;
