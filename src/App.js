import React from "react";
import Routes from "./Routes.jsx";
import NavigationBar from "./components/NavigationBar";
import { Grid } from "@material-ui/core";
import { Provider } from "react-redux";
import { createAppState } from "../src/redux/AppState";

const App = () => {
  return (
    <Provider store={createAppState()}>
      <Grid container>
        <NavigationBar />
        <Routes />
      </Grid>
    </Provider>
  );
};

export default App;
