import React from 'react';
import { Icon, Avatar,Badge, Row} from 'antd';
import store from '@redux/store';
import {toggleSiderMenu} from '@redux/actions';
class MyHeader extends React.Component {
  state = {
    collapsed: store.getState().sidermenu.collapsed,
  };

  toggleCollapsed = (() => {
  // this.setState({
  //     collapsed: !this.state.collapsed,
  // });
  // store.dispatch({type:'collapsed_sider',collapsed:this.state.collapsed});
  store.dispatch(toggleSiderMenu('root',this.state.collapsed));
    console.log('toggleCollapsed');
    console.log(store.getState());
  });

  render() {
    return (
      <div className="main-header">
        <span className="toggleCollapsed" type="primary" onClick={this.toggleCollapsed}  >
            <Icon type={this.state.collapsed ? 'right-circle' : 'left-circle'} theme="filled" />
        </span>
           <Avatar icon="user" />
          <Icon type="smile" rotate={180} />
          <a href="#">
            <Badge count={5}>
            <Icon type="notification" />
            </Badge>
        </a> 
      </div>
    );
  }
}

export default MyHeader
