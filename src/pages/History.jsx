import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import NavigationBar from "../components/NavigationBar";
import BuilderTable from "../components/BuilderTable";
import { bindActionCreators } from "redux";
import * as SentenceBuilderActions from "../redux/sentenceBuilderActions.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const History = (props) => {
  const { sentenceHistory, getSentenceHistory } = props;
  const [history, setHistory] = useState(false);

  useEffect(() => {
    getSentenceHistory();
  }, [getSentenceHistory]);

  useEffect(() => {
    if (sentenceHistory) {
      setHistory(sentenceHistory);
    }
  }, [sentenceHistory]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <NavigationBar />
      </Grid>
      <Grid container spacing={2}>
        {history && (
          <Grid item xs={12}>
            <BuilderTable rows={history} />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

History.propTypes = {
  sentenceHistory: PropTypes.array,
  getSentenceHistory: PropTypes.func,
};

export const mapStateToProps = (state) => {
  const sentenceHistory = state.sentenceBuilder.sentenceHistory;
  return {
    sentenceHistory: sentenceHistory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSentenceHistory: bindActionCreators(
      SentenceBuilderActions.getSentenceHistory,
      dispatch
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
