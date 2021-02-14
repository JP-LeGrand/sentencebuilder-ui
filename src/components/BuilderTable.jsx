import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import {
  readableDate as ReadableDate,
  toUpper as ToUpper,
} from "../helpers/UtilityFunctions";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables(props) {
  const classes = useStyles();
  const { rows } = props;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Sentence</StyledTableCell>
            <StyledTableCell align="right">
              Word type combinations
            </StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>
                {row.sentence.map((s) => `${s.word} `)}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.sentence.map((s, i) => (
                  <Typography key={i}>{ToUpper(s.type)}</Typography>
                ))}
              </StyledTableCell>
              <StyledTableCell align="right">
                {ReadableDate(new Date(row.dateTime))}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

CustomizedTables.propTypes = {
  rows: PropTypes.arrayOf({
    dateTime: PropTypes.string.isRequired,
    sentence: PropTypes.arrayOf(
      PropTypes.shape({
        word: PropTypes.string,
        type: PropTypes.string,
      })
    ),
  }),
};
