import React from 'react';
import { ForgotPassword } from "aws-amplify-react";
import { Input, Button, message } from 'antd';
import queryString from 'query-string';
import './AuthPage.scss';
import { Auth } from 'aws-amplify';

class ForgotPass extends ForgotPassword {
  constructor(props) {
    super(props);
    this._validAuthStates = ["forgotPassword"];
    this.code = React.createRef();
    this.state = {
      username: '',
      code: '',
      password: ''
    }
    this.forgotPasswordSubmit = this.forgotPasswordSubmit.bind(this);
  }


  componentDidMount() {
    if (window.location.pathname === '/change-password') {
      const parsedQuery = queryString.parse(window.location.search);
      const code = parsedQuery.verification_code ? parsedQuery.verification_code : '';
      const username = parsedQuery.username ? parsedQuery.username.split(' ').join('+') : '';
      console.log(username);
      this.setState({ code, username })
    }
  }

  handleInputCodeChange = (e) => { this.setState({ code: e.target.value }) }
  handleInputPasswordChange = (e) => { this.setState({ password: e.target.value }) }
  handleInputUsernameChange = (e) => { this.setState({ username: e.target.value }) }


  forgotPasswordSubmit = (event) => {
    event.preventDefault();
    const { username, code, password } = this.state;
    console.log(this.state);
    Auth.forgotPasswordSubmit(username, code, password)
      .then(() => {
        // console.log(data)
        this.changeState('signIn');
      })
      .catch(error => {
        if (error.message) {
          message.warning(error.message)
        }
        else {
          message.warning(error)
        }
      })
  }



  showComponent() {
    const { username, code, password, authData = {} } = this.state;

    return (
      <div className="auth-wrapper">
        <div className='auth-left'>
          <div className="my-2 w-100">
          <a href="/"
              className="text-indigo cursor-pointer hover:text-indigo-darker"
              onClick={() => { super.changeState("signIn") }}
            >
              <span className='icon icon_chevron' />Back to Login
            </a>
          </div>
          <form onSubmit={this.forgotPasswordSubmit} action="" >
            <div>
              <p className="mb-1 font-bold">Reset Your Password</p>
              <Input
                className="my-1"
                placeholder='New Password'
                type="password"
                key="password"
                name="password"
                value={password}
                onChange={this.handleInputPasswordChange}
              />
              <div className="my-1">
                <Button type="primary" shape="round" htmlType="submit" >Submit</Button>
              </div>
            </div>
          </form>
          <div className="appBtns">
            <p className="mb-2 font-bold">Download our app</p>
          </div>
        </div>
        <div className='auth-right'>
            <span className="icon-logo"></span>
        </div>
      </div>
    );
  }
}

export default ForgotPass;