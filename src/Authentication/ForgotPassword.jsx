import React from 'react';
import { ForgotPassword } from "aws-amplify-react";
import { Input, Button } from 'antd';
// const queryString = require('query-string');
import queryString from 'query-string';
import './AuthPage.scss';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';


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
          // value={this.state.code}
          // onChange={this.handleInputCodeChange}
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
      <div className="auth-wrapper">
        <div className='auth-left'>
          <div className="my-2 w-100">
            <button 
              className="text-indigo cursor-pointer hover:text-indigo-darker"
              onClick={() => { super.changeState("signIn") }}
              type="button"
            >
              <span className='icon icon_chevron' />Back to Login
            </button>
          </div>
          <form>
            <p className="page-title">
              {this.state.delivery || authData.username ?
                'Reset Your Password' : 'Forgotten your Pasword?'
              }
            </p>
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
            <div>
              {this.state.delivery || authData.username ?
                <Button type="primary" shape="round" onClick={ () => this.submit()} >Submit</Button> :
                <Button type="primary" shape="round" onClick={() => { this.send() }} >Send</Button>
              }
            </div>
          </form>
        </div>
        <div className='auth-right'>
            <span className="icon-logo"></span>
        </div>
      </div>
    );
  }
}

export default ForgotPass;