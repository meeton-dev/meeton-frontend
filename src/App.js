import React from "react";
import { BrowserRouter } from "react-router-dom";
import DynamicRouter from "./DynamicRouter";
import UniModal from "./Modals";
import { MainContext } from "./context/context";
import AppTop from "./Components/AppTop";
import AppNav from "./Components/AppNav";
// import { Auth } from "aws-amplify";

class App extends React.Component {
  constructor(props, context) {
      super(props, context);
      this.user = {};
      // this.getUser();
  }


  // getUser = async () => {
  //     if (this.props.authState === "signedIn" || this.props.authState === "loading") {
  //         this.user = await Auth.currentAuthenticatedUser();
  //         this.setState({ user: this.user });
  //     }
  // }

  render() {
      console.log('authState in app: ', this.props.authState);

      if (this.props.authState === "signedIn" || this.props.authState === "verifyContact") {
          return (
            <div id="appWrapper">
              <MainContext>
                <AppTop />
                <div className="appMain">
                  <AppNav />
                  <div className="appContent">
                    <BrowserRouter>
                      <DynamicRouter />
                      {/* <UniModal /> */}
                    </BrowserRouter>
                  </div>
                </div>
              </MainContext>
            </div>
          );
      } else {
          return null;
      }
  }
}

export default App;
