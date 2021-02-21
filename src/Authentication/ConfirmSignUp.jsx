import React from 'react';
import { ForgotPassword } from "aws-amplify-react";
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

  updateCode = (string) =>{
    console.log('string code', string);
    this.setState({
      code: string
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
      // if (error.message) {
      //   message.warning(error.message)
      // }
      // else {
      //   message.warning(error)
      // }
      // this.setState({ loading: false })
    })
  }

  showComponent() {
    // debugger;
    console.log(this.props);
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
              <button
                  type="primary" shape="round"
                  htmlType="submit"
                  className="btn"
                >
                  Activate
              </button>
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

export default MeetonConfirmSignUp;