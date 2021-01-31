import React from 'react';
import { ForgotPassword } from "aws-amplify-react";
import { Input, Button } from 'antd';
// const queryString = require('query-string');
import queryString from 'query-string';
import './AuthPage.scss';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';


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

  showComponent() {
    // debugger;
    const { authState, hide, authData = {} } = this.props;
    const userObj = {
      username: this.state.username,
      password: this.state.password,
      attributes: {
        name: this.state.name
      }
    }
    return (
      <div className="auth-wrapper">
        <div className='auth-left'>
          <h1>signUp</h1>
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
            type="text"
            placeholder="Type password"
          />
          <Input
            className="my-1"
            id="name"
            key="name"
            name="name"
            onChange={this.updateState}
            type="text"
            placeholder="Type name"
          />
          <button
            className="text-indigo cursor-pointer hover:text-indigo-darker"
            onClick={() => Auth.signUp(userObj, [], null, (err, data) => {
              if (err) console.log(err);
              console.log(data);
              super.changeState("confirmSignUp")
            })}
            type="button"
          >
            regisztral
          </button>
        </div>
        <div className='auth-right'>
            <span className="icon-logo"></span>
        </div>
      </div>
    );
  }
}

export default MeetonSignUp;