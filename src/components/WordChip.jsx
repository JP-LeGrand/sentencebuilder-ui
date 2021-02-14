import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "contents",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function WordChip(props) {
  const { word } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Chip
        label={word}
        component="a"
        href="#chip"
        clickable
        variant="outlined"
      />
    </div>
  );
}

WordChip.propTypes = {
  word: PropTypes.string,
};
