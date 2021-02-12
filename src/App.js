import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import DynamicRouter from "./DynamicRouter";
import UniModal from "./Modals";
import { MainContext } from "./context/context";
import AppTop from "./Components/AppTop";
import AppNav from "./Components/AppNav";
// import { Auth } from "aws-amplify";

const App = (props) => {
  const [wideMenu, setWideMenu] = useState(true)

  const layoutType = wideMenu ? 'wide' : 'narrow';
  if (props.authState === "signedIn" || props.authState === "verifyContact") {
      return (
        <div id="appWrapper">
          <MainContext setUser={props.authData.attributes}>
            <BrowserRouter>
                <AppTop />
                <div className={`appMain ${layoutType}`}>
                  <AppNav toggleMenu={() => setWideMenu(!wideMenu)}/>
                  <div className="appContent">
                      <DynamicRouter />
                      {/* <UniModal /> */}
                  </div>
                </div>
            </BrowserRouter>
          </MainContext>
        </div>
      );
  } else {
      return null;
  }
}

export default App;
