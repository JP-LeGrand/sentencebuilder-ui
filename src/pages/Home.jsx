import React from "react";
import { Grid, Typography } from "@material-ui/core";

export const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography>
          Sentence builder is web application that allows you to dynamically
          build a sentence by selecting words based on their word types.
        </Typography>
      </Grid>
      <Grid xs={12}>
        <Typography>
          The types are: Noun, Verb, Adjective, Adverb, Pronoun, Preposition,
          Conjunction, Determiner and Exclamation.
        </Typography>
      </Grid>
    </Grid>
  );
};
