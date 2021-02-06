import React from 'react';
import { ForgotPassword } from "aws-amplify-react";
import { Input, Button } from 'antd';
// const queryString = require('query-string');
import ReactInputVerificationCode from 'react-input-verification-code';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';
import { AuthFooter } from './AuthFooter';


class MeetonConfirmSignUp extends ForgotPassword {
  constructor(props) {
    super(props);
    this._validAuthStates = ["confirmSignUp"];
  }
  updateState = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  }

  showComponent() {
    // debugger;
    const { authState, hide, authData = {} } = this.props;
    const userObj = {
      code: this.state.code,
    }
    return (
      <div className="meetonAuth">
        <div className="auth-wrapper">
          <div className='auth-left'>
            <h1>activate</h1>
            <form onSubmit={this.handleSubmit} autoComplete="off" >
              <div className="meetonActivationKey">
                <ReactInputVerificationCode placeholder="" length={6} onChange={console.log} />
              </div>
              {/* <button
                className="text-indigo cursor-pointer hover:text-indigo-darker"
                onClick={() => Auth.confirmSignUp(userObj, [], null, (err, data) => {
                  if (err) console.log(err);
                  console.log(data);
                })}
                type="button"
              >
                Activate
              </button> */}
              <Button
                  type="primary" shape="round"
                  htmlType="submit"
                  className="btn"
                >
                  Activate
              </Button>
            </form>
          </div>
          <div className='auth-right'>
            <span className="icon-logo"></span>
            <span className="icon-logo-text"></span>
          </div>
        </div>
        <AuthFooter />
      </div>
    );
  }
}

export default MeetonConfirmSignUp;