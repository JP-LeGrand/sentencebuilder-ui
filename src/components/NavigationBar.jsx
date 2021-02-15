import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import history from "../history";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#fff",
  },
}));

const NavigationBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Link
          onClick={() => history.push("/")}
          variant="h4"
          className={classes.title}
        >
          Sentence Builder
        </Link>
        <Button onClick={() => history.push("/History")} color="inherit">
          Sentence History
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
