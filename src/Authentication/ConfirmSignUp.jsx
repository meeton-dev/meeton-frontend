import React from 'react';
import { ForgotPassword } from "aws-amplify-react";
import { Input, Button } from 'antd';
// const queryString = require('query-string');
import queryString from 'query-string';
import './AuthPage.scss';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';


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
      <div className="auth-wrapper">
        <h1>signUp</h1>
        <div className='auth-left'>
          
          <Input
            className="my-1"
            id="code"
            key="code"
            name="code"
            onChange={this.updateState}
            type="text"
            placeholder="Type code"
          />
          <button
            className="text-indigo cursor-pointer hover:text-indigo-darker"
            onClick={() => Auth.confirmSignUp(userObj, [], null, (err, data) => {
              if (err) console.log(err);
              console.log(data);
            })}
            type="button"
          >
            Activate
          </button>
        </div>
        <div className='auth-right'>
            <span className="icon-logo"></span>
        </div>
      </div>
    );
  }
}

export default MeetonConfirmSignUp;