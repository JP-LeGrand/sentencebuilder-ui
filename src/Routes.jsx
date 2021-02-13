import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { Build } from "./pages/Build";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Build} path="/Build" />
        <Route component={History} path="/History" />
        <Route component={Home} path="/" />
        <Route exact path="/index.html">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
