import React from "react";
import Routes from "./Routes.jsx";
import NavigationBar from "./components/NavigationBar";
import { Grid } from "@material-ui/core";

const App = () => {
  return (
    <Grid>
      <NavigationBar />
      <Routes />
    </Grid>
  );
};

export default App;
