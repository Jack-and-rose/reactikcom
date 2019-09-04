import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import '@styles/login.less';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.isLogging = false;
  }
  handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
          if (!err) {
              this.isLogging = true;
              login(values).then(() => {
                  this.isLogging = false;
                  let toPath = this.props.toPath === '' ?  '/layout/home' :  this.props.toPath
                  this.props.history.push(toPath);
              })
          }
      });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" className="login-form">
        <Form.Item>
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
        </Form.Item>
        <Form.Item>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
        </Form.Item>
        <Form.Item>
          <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(Login);

// const loginState = ({ loginState }) => ({
//     toPath: loginState.toPath
// })

// export default withRouter(connect(
//         loginState
// )(WrappedNormalLoginForm))

export default Login;
