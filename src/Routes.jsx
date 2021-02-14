import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";

const Routes = () => {
  return (
    <Switch>
      <Route exact component={History} path="/History" />
      <Route exact component={Home} path="/" />
      <Route exact path="/index.html">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default Routes;
