import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {ThemeProvider} from '@material-ui/core';
import theme from '../../ThemeConfig.js';
import {useParams} from 'react-router-dom';
import { StyledTableCell, StyledTableRow, useStyles } from './useStyles.js';

export default function CustomizedTables(props) {
  const classes = useStyles();
  const {id} = useParams();

  function createData(order, customer, email, address, date) {
    return { order, customer, email, address, date };
  }

  const rows = [
    createData(
      id, 
      props.order.userId, 
      props.order.shipping.email,
      `${props.order.shipping.address.line1}, 
      ${props.order.shipping.address.city}, 
      ${props.order.shipping.address.state}, 
      ${props.order.shipping.address.postal_code}`,
      props.order.createdAt
      ),
  ];

  console.log(props.order)

  return (
    <ThemeProvider theme={theme}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Order</StyledTableCell>
            <StyledTableCell align="center">Customer</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.order}>
              <StyledTableCell component="th" scope="row">
                {row.order}
              </StyledTableCell>
              <StyledTableCell align="center">{row.customer}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.address}</StyledTableCell>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </ThemeProvider>
  );
}