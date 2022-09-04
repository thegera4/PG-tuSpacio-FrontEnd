import * as React from 'react';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@material-ui/core';
import PageviewIcon from '@material-ui/icons/Pageview';
import { useNavigate } from 'react-router-dom';
import useStyles from './useStyles';

export default function OrdersGrid() {
  const classes = useStyles();
  const columns = [
  { field: 'id', headerName: 'Order No.', width: 90,},
  {
    field: 'date',
    headerName: 'Date',
    width: 185,
    type: 'datetime',
    editable: false,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 100,
    editable: true,
    type: 'singleSelect',
    valueOptions: ['Pending', 'In Progress', 'Completed', 'Cancelled'],
  },
  {
    field: 'customer',
    headerName: 'Customer',
    width: 150,
    editable: false,
  },
  {
    field: 'address',
    headerName: 'Address',
    width: 350,
    editable: false,
  },
  {
    field: 'items',
    headerName: 'Items',
    type: 'number',
    width: 80,
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
    width: 120,
    sortable: false,
    renderCell: (params) => {
        return (
          <div className="cellAction">
            <Button
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
const rows = [
  { id: "PO000001", date: '01/02/2022, 08:56:54 AM', status: 'Completed', customer: 'Jon Snow', address: '9047 Stark Walks, Lake Raymond, VT 55889-9005', items: 2, total: 1000 },
  { id: "PO000002", date: '02/02/2022, 10:23:53 AM', status: 'Completed', customer: 'Cersei Lannister', address: '6660 Autumn Ramp, Jakubowskitown, NH 07516', items: 3, total: 1500 },
  { id: "PO000003", date: '02/03/2022, 11:34:45 AM', status: 'Completed', customer: 'Jaime Lannister', address: '42936 Ryder Village, Luettgenhaven, LA 77290', items: 1, total: 400 },
  { id: "PO000004", date: '02/10/2022, 12:56:54 PM', status: 'In Progress', customer: 'Arya Stark', address: '885 Murphy Lodge, Lake Isaiah, HI 25847-6165', items: 4, total: 1750 },
  { id: "PO000005", date: '02/25/2022, 01:23:51 PM', status: 'In Progress', customer: 'Daenerys Targaryen', address: '146 Kshlerin Common, Millsberg, WA 33351', items: 3, total: 1200 },
  { id: "PO000006", date: '03/08/2022, 03:12:23 PM', status: 'In Progress', customer: 'Melisandre', address: '534 Cleve Fall, Port Gregorio, MT 12022-7861', items: 5, total: 2200 },
  { id: "PO000007", date: '03/12/2022, 05:45:10 PM', status: 'Pending', customer: 'Clifford Ferrara', address: '42936 Ryder Village, Luettgenhaven, LA 77290', items: 2, total: 800 },
  { id: "PO000008", date: '04/15/2022, 08:46:15 PM', status: 'Pending', customer: 'Frances Rossini', address: '6660 Autumn Ramp, Jakubowskitown, NH 07516', items: 3, total: 1200 },
  { id: "PO000009", date: '05/28/2022, 10:50:44 PM', status: 'Cancelled', customer: 'Harvey Roxie', address: '9047 Stark Walks, Lake Raymond, VT 55889-9005', items: 1, total: 300 },
];

  const [data] = useState(rows);
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/orders/${id}`);
  };

  return (
    <div style={{ height: 535, width: '100%', backgroundColor: '#fff'}}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
