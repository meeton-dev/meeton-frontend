import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import DynamicRouter from "./DynamicRouter";
import { MainContext } from "./context/context";
import AppTop from "./Components/AppTop";
import AppNav from "./Components/AppNav";
import UniModal from "./Components/Common/Modals";
import { ErrorBoundary } from "./Components/ErrorBoundary";
import Notifications from "./Components/Common/Notification";
// import { Auth } from "aws-amplify";
const LS = window.localStorage;

const App = (props) => {
  const [isMenuWide, setIsMenuWide] = useState(()=>{
    const menuSize = LS.getItem('menuSize');
    return menuSize === 'true' ? true : false
  })

  const handleToggelMenu = () =>{
    setIsMenuWide(prevState => {
      LS.setItem('menuSize', !prevState);
      return !prevState;
    })
  }

  if (props.authState === "signedIn" || props.authState === "verifyContact") {
      return (
        <MainContext setUser={props.authData.attributes}>
          <>
            <Notifications />
            <UniModal />
            <div id="appWrapper">
                <BrowserRouter>
                  <AppTop />
                  <div className={`appMain ${isMenuWide ? 'wide' : 'narrow'}`}>
                    <AppNav toggleMenu={() => handleToggelMenu()}/>
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
  } else {
      return null;
  }
}

export default App;
