import React from 'react';
import { ForgotPassword } from "aws-amplify-react";
import { Input, Button } from 'antd';
// const queryString = require('query-string');
import queryString from 'query-string';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';
import { AuthFooter } from './AuthFooter';


class MeetonSignUp extends ForgotPassword {
  constructor(props) {
    super(props);
    this._validAuthStates = ["signUp"];
  }
  updateState = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  handleSignUp() {
    const userObj = {
      username: this.state.username,
      password: this.state.password,
      attributes: {
        name: this.state.name
      }
    }
    Auth.signUp(userObj, [], null, {})
      .then(res => {
          console.log('res', res);
          this.changeState('confirmSignUp', userObj);
      }).catch(err => this.error(err));

  }

  showComponent() {
    // debugger;
    const { authState, hide, authData = {} } = this.props;

    console.log(this.props.authState);
    return (
      <div className="meetonAuth">
        <div className="auth-wrapper">
          <div className='auth-left'>
            <div className="authBack">
              <button 
                className="btn-off"
                onClick={() => { super.changeState("signIn") }}
                type="button"
              >
                <span className='icon icon_chevron' />Back
              </button>
            </div>
            <h1>sign up</h1>
            <div className="form">
              <Input
                id="name"
                key="name"
                name="name"
                onChange={this.updateState}
                type="text"
                placeholder="Type name"
              />
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
              <Input
                id="confirmPassword"
                key="confirmPassword"
                name="confirmPassword"
                onChange={this.updateState}
                type="password"
                placeholder="Confirm Password"
              />
              <div className="mainAction">
                <Button
                  type="primary" shape="round"
                  htmlType="submit"
                  className="btn"
                  onClick={() => this.handleSignUp()}
                >
                  Sign Up
                </Button>
              </div>
            </div>
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

export default MeetonSignUp;