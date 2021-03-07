/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import { RequireNewPassword } from 'aws-amplify-react';
import { Auth } from 'aws-amplify';
import AuthFooter from './AuthFooter';

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
    // this._validAuthStates = ['requireNewPassword'];
    this.code = React.createRef();
    this.state = {
      password: '',
    };
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
      .then((u) => {
        console.log('complete new password', u);
        this.changeState('signIn', u);
      })
      .catch((err) => this.error(err));
  }

  showComponent() {
    // const { password } = this.state;

    return (
      <div className="meetonAuth">
        <div className="auth-wrapper">
          <div className="auth-left">
            <div className="authBack">
              <button
                className="btn-off"
                onClick={() => { super.changeState('signIn'); }}
                type="button"
              >
                <span className="icon icon_chevron" />
                Back
              </button>
            </div>
            <h1>change password</h1>
            <form>
              <input
                placeholder="New Password"
                type="password"
                key="password"
                name="password"
                onChange={this.handleInputChange}
              />
              <input
                placeholder="Confirm New Password"
                type="confirmPassword"
                key="confirmPassword"
                name="confirmPassword"
                onChange={this.handleInputChange}
              />
              <div className="mainAction">
                <button type="button" shape="round" onClick={this.change}>Change</button>
              </div>
            </form>
          </div>
          <div className="auth-right">
            <span className="logo-logo" />
            <span className="logo-logo-text" />
          </div>
        </div>
        <AuthFooter />
      </div>
    );
  }
}

export default MeetonFirstLogin;
