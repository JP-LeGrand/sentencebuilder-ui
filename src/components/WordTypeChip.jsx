import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { toUpper } from "../helpers/UtilityFunctions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function WordTypes(props) {
  const classes = useStyles();
  const { wordTypes, homeRef } = props;
  const [type, setType] = useState("");

  useEffect(() => {
    homeRef({ type });
  }, [homeRef, type]);

  return (
    <Paper component="ul" className={classes.root}>
      {wordTypes.map((wordType, index) => {
        return (
          <li key={index}>
            <Chip
              component="button"
              onClick={() => setType(wordType)}
              clickable
              variant="outlined"
              label={toUpper(wordType)}
              className={classes.chip}
            />
          </li>
        );
      })}
    </Paper>
  );
}

WordTypes.propTypes = {
  wordTypes: PropTypes.array,
  homeRef: PropTypes.func,
};
