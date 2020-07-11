import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import Router from "./router";
import Styles from "./globalStyles";

import * as serviceWorker from "./serviceWorker";

const App = () => (
  <BrowserRouter>
    <Styles />
    <Router />
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
