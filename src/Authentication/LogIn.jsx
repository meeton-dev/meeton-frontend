import React from 'react';
import { SignIn } from 'aws-amplify-react';
import { Auth } from 'aws-amplify';
import AuthFooter from './AuthFooter';

class MeetonLogIn extends SignIn {
  constructor(props) {
    super(props);
    // eslint-disable-next-line no-underscore-dangle
    this._validAuthStates = ['signIn', 'signedOut', 'signedUp'];
    this.state = {
      username: '',
      password: '',
      loading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    if (window.location.pathname === '/change-password') {
      this.changeState('forgotPassword');
    }
  }

  updateState = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const { username, password } = this.state;
    Auth.signIn(username, password).then((response) => {
      console.log('response: ', response);
      if (response.challengeName === 'NEW_PASSWORD_REQUIRED') {
        this.changeState('requireNewPassword', response);
      } else {
        this.changeState('signedIn', response);
        this.setState({ username: '', password: '', loading: false });
      }
    }).catch(() => {
      this.setState({ loading: false });
    });
  }

  showComponent() {
    return (
      <div className="meetonAuth">
        <div className="auth-wrapper">
          <div className="auth-left">
            <h1>sign in</h1>
            <form onSubmit={this.handleSubmit} autoComplete="off">
              <input
                id="username"
                key="username"
                name="username"
                onChange={this.updateState}
                type="text"
                placeholder="Type email"
              />
              <input
                id="password"
                key="password"
                name="password"
                onChange={this.updateState}
                type="password"
                placeholder="Password"
              />

              <div className="mainAction">
                <button
                  type="button"
                  shape="round"
                  htmlType="submit"
                  className="btn"
                >
                  Sign In
                </button>
              </div>
              <div className="actions">
                <div>
                  <p>
                    Forgot your password?
                  </p>
                  <button
                    className="btn-as-link"
                    onClick={() => super.changeState('forgotPassword')}
                    type="button"
                  >
                    Reset now!
                  </button>
                </div>
                <div>
                  <p>
                    Dont have an account?
                  </p>
                  <button
                    className="btn-as-link"
                    onClick={() => super.changeState('signUp')}
                    type="button"
                  >
                    Sign up now.
                  </button>
                </div>
                <div>
                  <p>
                    If need to Activate,
                  </p>
                  <button
                    className="btn-as-link"
                    onClick={() => super.changeState('confirmSignUp')}
                    type="button"
                  >
                    click here
                  </button>
                </div>
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

export default MeetonLogIn;
