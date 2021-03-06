import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "./store/index.js";
import App from "./app.js";

import "./style/reset.css";

function Entry() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const root = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Entry />
  </BrowserRouter>,
  root
);
