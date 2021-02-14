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

const useStyles = makeStyles(() => ({
  appDescription: {
    textAlign: "center",
  },
  submitButton: {
    display: "flex",
    justifyContent: "center",
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
  } = props;
  const [word, setWord] = useState(false);
  const [wordType, setWordTypes] = useState(false);
  const [wordTypeRef, setWordTypeRef] = useState(false);

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
      submitSentence({ sentence, dateTime });
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <NavigationBar />
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography className={classes.appDescription}>
            Sentence builder is web application that allows you to dynamically
            build a sentence by selecting words based on their word types.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {word && wordType && (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <WordType wordTypes={wordType} homeRef={setWordTypeRef} />
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  {filterWordsToType(words, wordTypeRef.type).map((wtt) => (
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
            <Button onClick={() => submitSentences()} color="primary">
              Submit sentence
            </Button>
          )}
        </Grid>
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
};

export const mapStateToProps = (state) => {
  const sb = state.sentenceBuilder;
  return {
    wordTypes: sb.wordTypes,
    words: sb.words,
    sentence: sb.sentence,
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
