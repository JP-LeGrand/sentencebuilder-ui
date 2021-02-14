import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import {
  readableDate as ReadableDate,
  toUpper as ToUpper,
  joinWords,
} from "../helpers/UtilityFunctions";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 500,
  },
  heading: {
    fontWeight: "bold",
  },
});

export default function CustomizedTables(props) {
  const classes = useStyles();
  const { rows } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography className={classes.heading}>Sentence</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography className={classes.heading}>
                  Word type combinations
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography className={classes.heading}>Date</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  <TableCell>
                    <Typography>{joinWords(row.sentence)}</Typography>
                  </TableCell>
                  <TableCell align="right">
                    {row.sentence.map((s, i) => (
                      <Typography key={i}>{ToUpper(s.type)}</Typography>
                    ))}
                  </TableCell>
                  <TableCell align="right">
                    <Typography>
                      {ReadableDate(new Date(row.dateTime))}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
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
