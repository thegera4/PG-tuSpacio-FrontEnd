import * as React from 'react';
import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@material-ui/core';
import PageviewIcon from '@material-ui/icons/Pageview';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllOrders, updateOrderStatus } from '../../actions';
import useStyles from './useStyles';

export default function OrdersGrid() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  const navigate = useNavigate();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);
  
  const columns = [
  { field: 'id', headerName: 'Order No.', width: 90,},
  {
    field: 'date',
    headerName: 'Date',
    width: 183,
    type: 'datetime',
    editable: false,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 98,
    editable: true,
    type: 'singleSelect',
    valueOptions: ['processing', 'completed', 'cancelled'],
    cellClassName: (params) =>{
      return (
        params.value === 'processing' ? classes.processing : 
        params.value === 'completed' ? classes.completed : 
        params.value === 'cancelled' ? classes.cancelled : null
      )
    }
  },
  {
    field: 'customer',
    headerName: 'Customer',
    width: 190,
    editable: false,
  },
  {
    field: 'address',
    headerName: 'Address',
    width: 320,
    editable: false,
  },
  {
    field: 'items',
    headerName: 'Items',
    type: 'number',
    width: 55,
    editable: false,
  },
  {
    field: 'total',
    headerName: '$ Total',
    type: 'number',
    style: {  weight: 'bold'},
    width: 90,
    editable: false,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 100,
    sortable: false,
    renderCell: (params) => { 
        return (
          <div className="cellAction">
            <Button
              style={{transform: 'scale(.8)'}}
              variant="contained"
              color="primary"
              endIcon={<PageviewIcon>send</PageviewIcon>}
              onClick={() => handleView(params.row.id)}>
                View
            </Button>
          </div>
        );
    }
  }
  ];

  const rows = orders.map((order) => {
    let orderTotal = (order.total / 100).toString().replace(',', '.');
    return {
      id: order.number ? order.number : 'N/A',
      date: order.updatedAt,
      status: order.status,
      customer: order.userId?.toString().slice(14),
      address:  order.shipping?.address === null || 
                order.shipping?.address === undefined ? 'N/A' : 
                order.shipping?.address.line1 + ' ' +
                order.shipping?.address.city + ' ' +
                order.shipping?.address.state + ' ' +
                order.shipping?.address.country,
      items: order.orderProducts?.map(
        (product) => product.quantity).reduce((a, b) => a + b, 0),
      total: orderTotal,
    };
  });

  const handleView = (id) => {
    navigate(`/orders/${id}`);
  };

  return (
    <div style={{ height: 535, width: '100%', marginLeft: '0', backgroundColor: '#fff'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        onCellEditCommit={(params) => {
          console.log(params);
          dispatch(updateOrderStatus(params.id, params.value));
        }}
      />
    </div>
  );
}
