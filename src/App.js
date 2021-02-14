import React from "react";
import Routes from "./Routes.jsx";
import { Provider } from "react-redux";
import { createAppState } from "../src/redux/AppState";
import { Router } from "react-router-dom";
import history from "./history";

const App = () => {
  return (
    <Provider store={createAppState()}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
