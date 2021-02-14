import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";
import {
  toUpper as ToUpper,
  filterWordsToType,
} from "../helpers/UtilityFunctions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function TypeAccordion(props) {
  const classes = useStyles();
  const { wordTypes, words } = props;

  return (
    <div className={classes.root}>
      {wordTypes.map((wt, index) => {
        return (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{ToUpper(wt)}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {filterWordsToType(words, wt).map(
                (wtt, index) => `${ToUpper(wtt.word)} `
              )}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}

TypeAccordion.propTypes = {
  wordTypes: PropTypes.array,
  words: PropTypes.array,
};
