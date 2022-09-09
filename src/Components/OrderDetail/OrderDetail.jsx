import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Button } from '@material-ui/core';
import { useParams, useNavigate } from 'react-router-dom';
import OrderCustomerDetail from '../../Components/OrderCustomerDetail/OrderCustomerDetail.jsx';
import { getOrderById } from '../../actions'
import useStyles from './useStyles';

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
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const order = useSelector((state) => state.orderDetail);

  useEffect(() => {
    dispatch(getOrderById(params.id));
  }, [dispatch, params.id]);

  const rows = order.orderProducts?.map((item) => {
    return createRow(item.description, item.quantity, item.amount_total/100);
  });

  return (
    <TableContainer component={Paper}>
      <Button 
        className={classes.backBtn} 
        onClick={() => navigate(-1)}>
          <ArrowBackIcon />Go Back
      </Button>
      <OrderCustomerDetail order={order} />
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
