import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useParams } from 'react-router-dom';
import { getOrderById, cleanOrderDetail } from '../../actions'
import { StyledTableCell, StyledTableRow, useStyles } from './useStyles.js';
import {ThemeProvider} from '@material-ui/core';
import theme from '../../ThemeConfig.js';

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

export default function OrderDetail() {
  const classes = useStyles();
  const { id } = useParams();
  const dispatch = useDispatch();
  const order = useSelector((state) => state.orderDetail);

  useEffect(() => {
    dispatch(getOrderById(id));
    return () => {
      dispatch(cleanOrderDetail())
    }
  }, [dispatch, id]);

  function createData(order, customer, email, address, date) {
    return { order, customer, email, address, date };
  }

  const rowsHeader = [
    createData(
      order.number, 
      order.userId, 
      order.shipping?.email,
      `${order.shipping?.address.line1}, 
      ${order.shipping?.address.city}, 
      ${order.shipping?.address.state}, 
      ${order.shipping?.address.country}`,
      order.createdAt
      ),
  ];

  const rows = order.orderProducts?.map((item) => {
    return createRow(item.description, item.quantity, item.amount_total/100);
  });

  console.log(order);
  return (
    <TableContainer component={Paper}>
      {/* Header: Customer details */}
      <ThemeProvider theme={theme}>
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
              {rowsHeader.map((row) => (
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
      </ThemeProvider>
      {/* Body: Purchase Order Details */}
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Purchase Order Details
            </TableCell>
            <TableCell align="right">$ Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Products</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Unit</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{ccyFormat(row.unit)}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">
              {ccyFormat(order.subtotal/100)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Shipping</TableCell>
            <TableCell align="right">
              {ccyFormat((order.total - order.subtotal) / 100)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">
              {ccyFormat(order.total/100)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
