import React from 'react';
import { ForgotPassword } from "aws-amplify-react";
import { Input, Button } from 'antd';
// const queryString = require('query-string');
import queryString from 'query-string';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';
import { AuthFooter } from './AuthFooter';


class ForgotPass extends ForgotPassword {
  constructor(props) {
    super(props);
    this._validAuthStates = ["forgotPassword"];
  }
  submitNewCodeView() {
    return (
      <div>
        <p>We've sent you a code to your email</p>
        <Input
         ref={this.code}
          className="my-1"
          placeholder='Code'
          key="code"
          name="code"
          autoComplete="off"
          id="code"
          onChange={this.handleInputChange}
        />
        <Input
          className="my-1"
          placeholder='New Password'
          type="password"
          key="password"
          name="password"
          onChange={this.handleInputChange}
        />
      </div>
    );
  }

  showComponent() {
    // debugger;
    const { authState, hide, authData = {} } = this.props;

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
            <h1>{this.state.delivery || authData.username ?
                  'reset password' : 'reset pasword'
                }</h1>
            <form>
              {this.state.delivery || authData.username ?
                this.submitNewCodeView()
                :
                <Input
                  className="my-1"
                  id="username"
                  key="username"
                  name="username"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Type email"
                />
              }
              <div>
                {this.state.delivery || authData.username ?
                  <a href='#' onClick={this.send} >Resend Code</a> : ''
                }
              </div>
              <div className="mainAction">
                {this.state.delivery || authData.username ?
                  <Button type="primary" className="btn" onClick={ () => this.submit()} >Submit</Button> :
                  <Button type="primary" className="btn" onClick={() => { this.send() }} >Send</Button>
                }
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

export default ForgotPass;