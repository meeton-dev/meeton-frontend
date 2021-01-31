import React from "react";
import { BrowserRouter } from "react-router-dom";
import DynamicRouter from "./DynamicRouter";
import UniModal from "./Modals";
import { MainContext } from "./context/context";
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
      console.log(this.props.authState);

      if (this.props.authState === "signedIn") {
          return (
            <div className="App">
              <MainContext>
                <BrowserRouter>
                  <DynamicRouter />
                  <UniModal />
                </BrowserRouter>
              </MainContext>
            </div>
          );
      } else {
          return null;
      }
  }
}

export default App;
