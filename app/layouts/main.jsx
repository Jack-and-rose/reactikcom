import React, { Children } from 'react';
import MyHeader from '@app/layouts/topHeader.jsx';
import MySiderMenu from '@app/layouts/siderMenu.jsx';
import Foot from '@app/layouts/foot.jsx';
import '@styles/layouts.less';
import { Layout,Breadcrumb, Icon,Button} from 'antd';

const {Header,Footer,Sider,Content} = Layout;

class Main extends React.Component {
    state = {
        collapsed: false,
      };
    
      toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
      };
    render() {
        const {children} = this.props;
        return (
            <div className="page-wraper app-page sidemenu-show sidemenu-collapse sidemenu-none"> 
                <Layout className="main-body">
                    <Header className="main-header">
                        <MyHeader/>
                        
                    </Header>
                    <Layout>
                        <Sider collapsed={this.state.collapsed} collapsible="true" trigger={null} breakpoint='xs' theme="light"> 
                            <MySiderMenu />
                        </Sider>
                        <Layout>
                            <Content>
                               {children}
                            </Content>
                            <Footer>
                                <Foot></Foot>
                            </Footer>
                        </Layout>
                            
                    </Layout>
                </Layout> 
            </div>
        )
    }
}

export default Main;
