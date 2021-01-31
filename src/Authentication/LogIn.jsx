import React from 'react';
import { SignIn } from "aws-amplify-react";
import { Auth } from 'aws-amplify';
import { message, Spin } from 'antd';
import { Input, Button } from 'antd';
import './AuthPage.scss';

class MeetonLogIn extends SignIn {
  constructor(props) {
    super(props);
    this._validAuthStates = ["signIn", "signedOut", "signedUp"];
    this.state = {
      username: '',
      password: '',
      loading: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevState, prevProps) {
    if (window.location.pathname === '/change-password') {
      this.changeState("forgotPassword")
    }
  }

  updateState = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const { username, password } = this.state;
    Auth.signIn(username, password).then((response) => {
      console.log('response: ',response);
      if(response.challengeName === 'NEW_PASSWORD_REQUIRED'){
        this.changeState('requireNewPassword', response);
      }else{
        this.changeState('signedIn', response);
        this.setState({ username: '', password: '', loading: false });
      }
    }).catch((error) => {
      if (error.message) {
        message.warning(error.message)
      }
      else {
        message.warning(error)
      }
      this.setState({ loading: false })
    })
  }
  showComponent() {

    return (
      <div className="auth-wrapper">
        <div className='auth-left'>
          <h1>login</h1>
          <form onSubmit={this.handleSubmit} autoComplete="off" >
            <Input
              className="my-1"
              id="username"
              key="username"
              name="username"
              onChange={this.updateState}
              type="text"
              placeholder="Type email"
            />
            <Input
              className="my-1"
              id="password"
              key="password"
              name="password"
              onChange={this.updateState}
              type="password"
              placeholder="Password"
            />
            <div className="mainAction">
              <Button
                type="primary" shape="round"
                htmlType="submit"
                className="btn"
              >
                Log In
              </Button>
              <Spin spinning={this.state.loading} />
            </div>
            <div className="actions">
              <div>
                <p>
                  Don't remember your password? {' '}
                </p>
                <button
                  className="btn-as-link"
                  onClick={() => super.changeState("forgotPassword")}
                  type="button"
                >
                  Reset my password
                </button>
              </div>
              <div>
                <p>
                  Don't have an account yet? {' '}
                </p>
                <button
                  className="btn-as-link"
                  onClick={() => super.changeState("signUp")}
                  type="button"
                >
                  Sign up now.
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className='auth-right'>
          <span className="icon-logo"></span>
          <span className="icon-logo-text"></span>
        </div>
      </div >

    );
  }
}

export default MeetonLogIn;

