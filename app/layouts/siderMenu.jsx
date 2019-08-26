import React from 'react';
import { Layout,Menu, Icon, Button } from 'antd';
const {Header,Footer,Sider,Content} = Layout;
const { SubMenu } = Menu;
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";

class MySubMenu extends React.Component {
    state = {
      collapsed: false,
    };

    toggleCollapsed = () => {
      this.setState({
          collapsed: !this.state.collapsed,
      });
    };
  render() {
    return (
      <Sider className="sider-menu" collapsed={this.state.collapsed} collapsible="true" trigger={null} breakpoint='xs' theme="light">
        <span className="toggleCollapsed" type="primary" onClick={this.toggleCollapsed}  >
            <Icon type={this.state.collapsed ? 'right-circle' : 'left-circle'} theme="filled" />
        </span>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
        >
          <Menu.Item key="1">
            <Link to="/home"><Icon type="pie-chart" /><span>首页</span></Link>
          </Menu.Item>
          <SubMenu
            key="blackHoleSys"
            title={
              <span>
                <Icon type="mail" />
                <span>黑洞系统</span>
              </span>
            }
          >
            <Menu.Item key="5"><Link to="/blackHoleSys/traction"><Icon type="desktop" /><span>黑洞IP列表</span></Link></Menu.Item>
            <Menu.Item key="6"><Link to="/blackHoleSys/monitor"><Icon type="desktop" /><span>线路流量监控</span></Link></Menu.Item>
            <Menu.Item key="7"><Link to="/blackHoleSys/ipscanner"><Icon type="desktop" /><span>IP浏览监控</span></Link></Menu.Item>
          </SubMenu>
          <SubMenu
            key="router_in"
            title={
              <span>
                <Icon type="mail" />
                <span>路由管理(入向流量)</span>
              </span>
            }
          >
            <Menu.Item key="5"><Link to="/router_in/routermanager"><Icon type="desktop" /><span>路由器管理</span></Link></Menu.Item>
            <Menu.Item key="6"><Link to="/router_in/communitymanager"><Icon type="desktop" /><span>团体属性</span></Link></Menu.Item>
            <Menu.Item key="7"><Link to="/router_in/communitygroup"><Icon type="desktop" /><span>分组管理</span></Link></Menu.Item>
          </SubMenu>
          <Menu.Item key="2">
            <Link to="/login"><Icon type="desktop" /><span>登录</span></Link>
          </Menu.Item>
          <Menu.Item key="3">
          <Link to="/loginout"><Icon type="desktop" /><span>退出登录</span></Link>
          </Menu.Item>
          <Menu.Item key="4">
          <Link to="/testrouter"><Icon type="desktop" /><span>测试路由</span></Link>
          </Menu.Item>
          
          
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
export default MySubMenu