import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./service-worker";

ReactDOM.render(<App />, document.getElementById("root")); // It takes 2 parameters, firstly the jsx template secondly where would you like to render it in index.html

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
