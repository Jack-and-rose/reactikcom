import React from 'react';
import { Icon, Avatar,Badge, Row} from 'antd';

class MyHeader extends React.Component {
  render() {
    
    return (
      <div>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
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
