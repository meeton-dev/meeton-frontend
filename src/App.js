import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter } from 'react-router-dom';
import DynamicRouter from './DynamicRouter';
import { MainContext } from './context/context';
import AppTop from './Components/AppTop';
import AppNav from './Components/AppNav';
import UniModal from './Components/Common/Modals';
import { ErrorBoundary } from './Components/ErrorBoundary';
import Notifications from './Components/Common/Notification';
// import { Auth } from "aws-amplify";
const LS = window.localStorage;

const App = (props) => {
  const [isMenuWide, setIsMenuWide] = useState(() => {
    const menuSize = LS.getItem('menuSize');
    return menuSize === 'true';
  });

  const { authState, authData } = props;
  const { attributes } = authData;

  const handleToggelMenu = () => {
    setIsMenuWide((prevState) => {
      LS.setItem('menuSize', !prevState);
      return !prevState;
    });
  };

  if (authState === 'signedIn' || authState === 'verifyContact') {
    return (
      <MainContext setUser={attributes}>
        <>
          <Notifications />
          <UniModal />
          <div id="appWrapper">
            <BrowserRouter>
              <AppTop />
              <div className={`appMain ${isMenuWide ? 'wide' : 'narrow'}`}>
                <AppNav toggleMenu={() => handleToggelMenu()} />
                <div className="appContent">
                  <ErrorBoundary>
                    <DynamicRouter />
                  </ErrorBoundary>
                </div>
              </div>

            </BrowserRouter>
          </div>
        </>
      </MainContext>
    );
  }
  return null;
};

export default App;

App.propTypes = {
  authState: PropTypes.string.isRequired,
  authData: PropTypes.instanceOf(Object),

};

App.defaultProps = {
  authData: {},
};
