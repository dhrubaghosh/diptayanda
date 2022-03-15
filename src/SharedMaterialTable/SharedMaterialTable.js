import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import MuiTableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import './SharedMaterialTable.css'
import { TablePagination } from '@mui/material';

const useStyles = makeStyles({
  table: {
    maxWidth: 750,
    border: 0,
    borderRadius: 3,
    boxShadow: '0 1px 1px 3px rgb(194, 181, 180)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: '130px',
    
    
  }
});

const TableHead = withStyles((theme) => ({
  root: {
    backgroundColor: "gray",
    color: 'white',
    
  }
}))(MuiTableHead);

const TableHeaderCell = withStyles((theme) => ({
  root: {
    color: "white"
  }
}))(TableCell);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

export const SharedMaterialTable = () => {
  const classes = useStyles();
    
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Dessert (100g serving)</TableHeaderCell>
            <TableHeaderCell align="right">Calories</TableHeaderCell>
            <TableHeaderCell align="right">Fat&nbsp;(g)</TableHeaderCell>
            <TableHeaderCell align="right">Carbs&nbsp;(g)</TableHeaderCell>
            <TableHeaderCell align="right">Protein&nbsp;(g)</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <TablePagination
                    rowsPerPageOptions={[5]}
                    count={[10]}
                    rowsPerPage={[3]}
                    page={[1]}
                    
                  /> */}
    </TableContainer>
    
    
  );
}
