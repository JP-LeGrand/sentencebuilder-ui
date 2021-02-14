import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as SentenceBuilderActions from "../redux/sentenceBuilderActions.js";
import { connect } from "react-redux";

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

const WordChip = (props) => {
  const {
    word,
    buildSentence,
    wordObject,
    enableDelete,
    breakSentence,
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Chip
        deleteIcon={enableDelete}
        label={word}
        component="a"
        onClick={() =>
          enableDelete ? breakSentence(wordObject) : buildSentence(wordObject)
        }
        clickable
        variant="outlined"
      />
    </div>
  );
};

WordChip.propTypes = {
  word: PropTypes.string,
  wordObject: PropTypes.shape({
    word: PropTypes.string,
    type: PropTypes.string,
    _id: PropTypes.string,
  }),
  sentence: PropTypes.array,
  buildSentence: PropTypes.func,
  breakSentence: PropTypes.func,
  enableDelete: PropTypes.bool,
};

export const mapStateToProps = (state) => {
  const sb = state.sentenceBuilder;
  return {
    sentence: sb.sentence,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buildSentence: bindActionCreators(
      SentenceBuilderActions.buildSentence,
      dispatch
    ),
    breakSentence: bindActionCreators(
      SentenceBuilderActions.breakSentence,
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WordChip);
