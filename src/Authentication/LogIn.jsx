import React from 'react';
import { SignIn } from "aws-amplify-react";
import { Auth } from 'aws-amplify';
import { message, Spin } from 'antd';
import { Input, Button } from 'antd';
import { AuthFooter } from './AuthFooter';

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
      <div className="meetonAuth">
        <div className="auth-wrapper">
          <div className='auth-left'>
            <h1>sign in</h1>
            <form onSubmit={this.handleSubmit} autoComplete="off" >
              <Input
                id="username"
                key="username"
                name="username"
                onChange={this.updateState}
                type="text"
                placeholder="Type email"
              />
              <Input
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
                  Sign In
                </Button>
                <Spin spinning={this.state.loading} />
              </div>
              <div className="actions">
                <div>
                  <p>
                    Forgot your password?
                  </p>
                  <button
                    className="btn-as-link"
                    onClick={() => super.changeState("forgotPassword")}
                    type="button"
                  >
                    Reset now!
                  </button>
                </div>
                <div>
                  <p>
                    Don't have an account?
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
            <span className="logo-logo"></span>
            <span className="logo-logo-text"></span>
          </div>
        </div>
        <AuthFooter />
      </div>

    );
  }
}

export default MeetonLogIn;

