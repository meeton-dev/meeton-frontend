import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import DynamicRouter from "./DynamicRouter";
import "antd/dist/antd.css";

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <DynamicRouter />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
