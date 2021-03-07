import React from 'react';
// import { SignIn, Greetings } from "aws-amplify-react";
import { Authenticator } from 'aws-amplify-react';
import config from '../aws-exports';
import MeetonLogIn from './LogIn';
import MeetonFirstLogin from './FirstLogin';
import MeetonSignUp from './SignUp';

import ForgotPassword from './ForgotPassword';
import ForgotPasswordPassed from './ForgotPasswordPassed';
import App from '../App';
import MeetonConfirmSignUp from './ConfirmSignUp';

const AppWithAuth = () => (
  <div className="meetonApp">
    <Authenticator hideDefault amplifyConfig={config}>
      <MeetonLogIn />
      <MeetonFirstLogin />
      <MeetonSignUp />
      <MeetonConfirmSignUp />
      {window.location.pathname === '/change-password' ? <ForgotPasswordPassed /> : <ForgotPassword />}
      <App />
    </Authenticator>
  </div>
);

export default AppWithAuth;
