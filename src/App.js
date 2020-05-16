import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import DynamicRouter from "./DynamicRouter";
import UniModal from "./Modals";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          {/* Router */}
          <DynamicRouter />
          {/* MODALS */}
          <UniModal />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
