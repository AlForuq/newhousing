import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root";
import RootContext from "./context";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/reset.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootContext>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </RootContext>
  </React.StrictMode>
);
