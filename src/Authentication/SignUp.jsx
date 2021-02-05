import React from 'react';
import { ForgotPassword } from "aws-amplify-react";
import { Input, Button } from 'antd';
// const queryString = require('query-string');
import queryString from 'query-string';
import './AuthPage.scss';
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
  change() {
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
            <h1>signUp</h1>
            <form onSubmit={this.handleSubmit} autoComplete="off" >
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
                >
                  Sign Up
                </Button>
              </div>
            </form>
          </div>
          <div className='auth-right'>
              <span className="icon-logo"></span>
          </div>
        </div>
        <AuthFooter />
      </div>
    );
  }
}

export default MeetonSignUp;