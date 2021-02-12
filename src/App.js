import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import DynamicRouter from "./DynamicRouter";
import UniModal from "./Modals";
import { MainContext } from "./context/context";
import AppTop from "./Components/AppTop";
import AppNav from "./Components/AppNav";
// import { Auth } from "aws-amplify";
const LS = window.localStorage;

const App = (props) => {
  const [isMenuWide, setIsMenuWide] = useState(()=>{
    const menuSize = LS.getItem('menuSize');
    console.log(menuSize);
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
        <div id="appWrapper">
          <MainContext setUser={props.authData.attributes}>
            <BrowserRouter>
                <AppTop />
                <div className={`appMain ${isMenuWide ? 'wide' : 'narrow'}`}>
                  <AppNav toggleMenu={() => handleToggelMenu()}/>
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
