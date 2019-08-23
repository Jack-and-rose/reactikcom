import React, { Children } from 'react';
import { DatePicker } from 'antd';
import Home from '@pages/home.jsx';
import Login from '@pages/login.jsx';
import Loginout from '@pages/loginout.jsx';
import Testrouter from '@pages/testrouter.jsx';
import MyHeader from '@app/layouts/topHeader.jsx';
import MySiderMenu from '@app/layouts/siderMenu.jsx';
import Foot from '@app/layouts/foot.jsx';
import '@styles/layouts.less';
import { Layout,Breadcrumb, Icon,Button} from 'antd';
import { BrowserRouter as Router, Route } from 'react-router-dom'

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
                        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                        </Button>
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
