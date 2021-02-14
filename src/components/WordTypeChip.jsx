import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { toUpper } from "../helpers/UtilityFunctions";
import { bindActionCreators } from "redux";
import * as SentenceBuilderActions from "../redux/sentenceBuilderActions.js";
import { connect } from "react-redux";

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

const WordTypes = (props) => {
  const classes = useStyles();
  const { wordTypes, setType } = props;

  return (
    <Paper component="ul" className={classes.root}>
      {wordTypes.map((wordType, index) => {
        return (
          <li key={index}>
            <Chip
              color="primary"
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
};

WordTypes.propTypes = {
  wordTypes: PropTypes.array,
  setType: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    setType: bindActionCreators(SentenceBuilderActions.setType, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(WordTypes);
