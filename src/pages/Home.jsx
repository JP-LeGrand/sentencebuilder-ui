import React, { useEffect, useState } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import NavigationBar from "../components/NavigationBar";
import WordType from "../components/WordTypeChip";
import WordChip from "../components/WordChip";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as SentenceBuilderActions from "../redux/sentenceBuilderActions.js";
import { connect } from "react-redux";
import { toUpper, filterWordsToType } from "../helpers/UtilityFunctions";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appDescription: {
    textAlign: "center",
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const { wordTypes, words, getWords, getWordTypes } = props;
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
            <React.Fragment>
              <WordType wordTypes={wordType} homeRef={setWordTypeRef} />
              <Paper>
                {filterWordsToType(words, wordTypeRef.type).map(
                  (wtt, index) => (
                    <WordChip key={index} word={toUpper(wtt.word)} />
                  )
                )}
              </Paper>
            </React.Fragment>
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
};

export const mapStateToProps = (state) => {
  const sb = state.sentenceBuilder;
  return {
    wordTypes: sb.wordTypes,
    words: sb.words,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWordTypes: bindActionCreators(
      SentenceBuilderActions.getWordTypes,
      dispatch
    ),
    getWords: bindActionCreators(SentenceBuilderActions.getWords, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
