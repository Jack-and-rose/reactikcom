import React from 'react';
import {Breadcrumb, Icon, Avatar,Badge, Row} from 'antd';

class MyBreadcrumb extends React.Component {
  render() {
    return (
        <Row className="main-breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item href="/">
              <Icon type="home" />
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Icon type="user" />
              <span>Application List</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Application</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
    );
  }
}

export default MyBreadcrumb
