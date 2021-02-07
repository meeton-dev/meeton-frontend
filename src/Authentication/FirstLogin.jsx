import React from 'react';
import { RequireNewPassword } from "aws-amplify-react";
import { Input, Button } from 'antd';
import { Auth } from 'aws-amplify';
import { AuthFooter } from './AuthFooter';

function objectWithProperties(obj, keys) {
    const target = {};
    for (const key in obj) {
        if (keys.indexOf(key) === -1) {
            continue;
        }
        if (!Object.prototype.hasOwnProperty.call(obj, key)) {
            continue;
        }
        target[key] = obj[key];
    }
    return target;
}

class MeetonFirstLogin extends RequireNewPassword {
  constructor(props) {
    super(props);
    this._validAuthStates = ["requireNewPassword"];
    this.code = React.createRef();
    this.state = {
      password: ''
    }
  }

  change() {
    const user = this.props.authData;
    const { password } = this.inputs;
    const { requiredAttributes } = user.challengeParam;
    const attrs = objectWithProperties(this.inputs, requiredAttributes);

    if (!Auth || typeof Auth.completeNewPassword !== 'function') {
        throw new Error('No Auth module found, please ensure @aws-amplify/auth is imported');
    }
    Auth.completeNewPassword(user, password, attrs)
        .then(user => {
            console.log('complete new password', user);
            this.changeState('signIn', user);
        })
        .catch(err => this.error(err));
  }

  showComponent() {
    const { password } = this.state;

    return (
      <div className="meetonAuth">
        <div className="auth-wrapper">
          <div className='auth-left'>
            <div className="my-2 w-100">
              <a href="/"
                className="text-indigo cursor-pointer hover:text-indigo-darker"
                onClick={() => { 
                  super.changeState("signIn") 
                }}
              >
                <span className='icon icon_chevron' />Back to Login
              </a>
            </div>
            <form>
              <div>
              <p className="mb-1 font-bold">Change Temporary Password</p>
              <Input
                  className="my-1"
                  placeholder='New Password'
                  type="password"
                  key="password"
                  name="password"
                  onChange={this.handleInputChange}
              />
              {/* <div className="my-1"> <a href='#' onClick={this.send} >Resend Code</a> </div> */}
              <div className="my-1">
                  <Button type="primary" shape="round" onClick={this.change} >Change</Button>
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

export default MeetonFirstLogin;