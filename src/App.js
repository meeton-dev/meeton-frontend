import React from "react";
import { BrowserRouter } from "react-router-dom";
import DynamicRouter from "./DynamicRouter";
import UniModal from "./Modals";
import "antd/dist/antd.css";
import { MainContext } from "./context/context";

function App() {
  return (
    <div className="App">
      <MainContext>
        <BrowserRouter>
          {/* Router */}
          <DynamicRouter />
          {/* MODALS */}
          <UniModal />
        </BrowserRouter>
      </MainContext>
    </div>
  );
}

export default App;
