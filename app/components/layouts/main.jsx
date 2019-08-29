import React, { Children } from 'react';
import MyHeader from '@layouts/topHeader.jsx';
import MySiderMenu from '@layouts/siderMenu.jsx';
import MyBreadcrumb from '@layouts/breadcrumb.jsx';
import Foot from '@layouts/foot.jsx';
import '@styles/app.less';
import { Layout,Breadcrumb, Icon,Button,Tabs,Row,Col,Input,Select,Switch,Table} from 'antd';

const {Header,Footer,Sider,Content} = Layout;
const {TabPane} = Tabs;
class Main extends React.Component {
    constructor(props){
        super(props);
    };
    state = {
        collapsed: false,
      };
    
    toggleCollapsed = (() => {
    this.setState({
        collapsed: !this.state.collapsed,
    });
    });
    onClickTab = ((key)=>{
        console.log(key)
    });
    render() {
        const {children} = this.props;
        console.log(this)
        return (
                <Layout className="page-wraper app-page sidemenu-show sidemenu-collapse sidemenu-none"> 
                    <Header className="main-header">
                        <MyHeader/>
                    </Header>
                    <Layout>
                        <MySiderMenu />
                        <Layout>
                            <section className="main">
                                <MyBreadcrumb></MyBreadcrumb>
                                <div className="main-body">
                                {/* {children} */}
                                <Tabs tabPosition="top" onChange={this.onClickTab}>
                                    <TabPane tab="sgp" key="e1f48d2d-4209-41cb-8111-a85525f5cb18"> 
                                        {children}
                                    </TabPane>
                                    <TabPane tab="台湾机房" key="21bed676-7eae-467a-9689-7610fee28963">
                                        {children}
                                    </TabPane>
                                </Tabs>
                                </div>
                            </section>
                            <Foot></Foot>
                        </Layout>
                    </Layout>
                </Layout> 
        )
    }
}

export default Main;
