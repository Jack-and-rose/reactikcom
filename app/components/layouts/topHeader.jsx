import React from 'react';
import { Icon, Avatar,Badge, Row} from 'antd';

class MyHeader extends React.Component {
  render() {
    
    return (
      <div className="main-header">
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
