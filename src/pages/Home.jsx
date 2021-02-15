import React, { useEffect, useState } from "react";
import { Grid, Typography, Paper, Button } from "@material-ui/core";
import NavigationBar from "../components/NavigationBar";
import WordType from "../components/WordTypeChip";
import WordChip from "../components/WordChip";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as SentenceBuilderActions from "../redux/sentenceBuilderActions.js";
import { connect } from "react-redux";
import { toUpper, filterWordsToType } from "../helpers/UtilityFunctions";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(() => ({
  appDescription: {
    textAlign: "center",
  },
  submitButton: {
    display: "flex",
    justifyContent: "center",
  },
  btnSubmit: {
    backgroundColor: "#3f51b5",
    color: "#fff",
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const {
    wordTypes,
    words,
    getWords,
    getWordTypes,
    sentence,
    submitSentence,
    type,
  } = props;
  const [word, setWord] = useState(false);
  const [wordType, setWordTypes] = useState(false);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    getWordTypes();
    getWords();
  }, [getWordTypes, getWords]);

  useEffect(() => {
    if (words) {
      setWord(words);
    }
    if (wordTypes) {
      setWordTypes(wordTypes);
    }
  }, [words, wordTypes]);

  const submitSentences = () => {
    if (sentence.length > 0) {
      var dateTime = new Date(Date.now());
      submitSentence({ sentence, dateTime }).then((response) => {
        if (response) {
          setOpen(true);
        }
      });
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <NavigationBar />
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.appDescription}>
            Sentence builder is web application that allows you to dynamically
            build a sentence by selecting words based on their word types.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {word && wordType && (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <WordType wordTypes={wordType} />
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  {filterWordsToType(words, type).map((wtt) => (
                    <WordChip
                      key={wtt._id}
                      word={toUpper(wtt.word)}
                      wordObject={wtt}
                    />
                  ))}
                </Paper>
              </Grid>
            </Grid>
          )}
        </Grid>
        <Grid item xs={12}>
          {sentence && (
            <Paper>
              {sentence.map((s) => (
                <WordChip
                  key={s._id}
                  word={toUpper(s.word)}
                  wordObject={s}
                  enableDelete={true}
                />
              ))}
            </Paper>
          )}
        </Grid>
        <Grid item xs={12} className={classes.submitButton}>
          {sentence && sentence.length > 0 && (
            <Button
              className={classes.btnSubmit}
              onClick={() => submitSentences()}
              color="primary"
            >
              Submit sentence
            </Button>
          )}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Sentence submitted successfully!
          </Alert>
        </Snackbar>
      </Grid>
    </Grid>
  );
};

Home.propTypes = {
  words: PropTypes.array,
  wordTypes: PropTypes.array,
  getWordTypes: PropTypes.func,
  getWords: PropTypes.func,
  sentence: PropTypes.array,
  submitSentence: PropTypes.func,
  type: PropTypes.string,
};

export const mapStateToProps = (state) => {
  const sb = state.sentenceBuilder;
  return {
    wordTypes: sb.wordTypes,
    words: sb.words,
    sentence: sb.sentence,
    type: sb.type,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWordTypes: bindActionCreators(
      SentenceBuilderActions.getWordTypes,
      dispatch
    ),
    getWords: bindActionCreators(SentenceBuilderActions.getWords, dispatch),
    submitSentence: bindActionCreators(
      SentenceBuilderActions.submitSentence,
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
