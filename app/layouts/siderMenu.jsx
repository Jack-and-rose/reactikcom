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
  render() {
    return (
      <div className="main-sider-menu">
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
        >
          <Menu.Item key="1">
            <Link to="/home"><Icon type="pie-chart" /><span>首页</span></Link>
          </Menu.Item>
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
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
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
      </div>
    );
  }
}
export default MySubMenu