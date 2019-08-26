import React, { Children } from 'react';
import MyHeader from '@app/layouts/topHeader.jsx';
import MySiderMenu from '@app/layouts/siderMenu.jsx';
import MyBreadcrumb from '@app/layouts/breadcrumb.jsx';
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
                <Layout className="page-wraper app-page sidemenu-show sidemenu-collapse sidemenu-none"> 
                    <Header className="main-header">
                        <MyHeader/>
                    </Header>
                    <Layout>
                        {/* <Foot/>
                        <Sider className="main-sider" collapsed={this.state.collapsed} collapsible="true" trigger={null} breakpoint='xs' theme="light"> 
                            <MySiderMenu />
                        </Sider> */}
                        <MySiderMenu />
                        <Layout>
                            <Content className="main">
                                <MyBreadcrumb></MyBreadcrumb>
                                <div className="main-body">
                                    {children}
                                </div>
                               
                            </Content>
                            <Footer className="main-body">
                                <Foot></Foot>
                            </Footer>
                        </Layout>
                    </Layout>
                </Layout> 
        )
    }
}

export default Main;
