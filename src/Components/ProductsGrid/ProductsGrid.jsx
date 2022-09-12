import * as React from 'react';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@material-ui/core';
import PageviewIcon from '@material-ui/icons/Pageview';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useNavigate } from 'react-router-dom';
import useStyles from './useStyles';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ProductsGrid() {
  const classes = useStyles();
  const columns = [
  { field: 'id', headerName: 'ID', width: 70,},
  {
    field: 'stock',
    headerName: 'Stock',
    width: 80,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: false,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 350,
    editable: false,
  },
  {
    field: 'price',
    headerName: '$ Price',
    type: 'number',
    style: {  weight: 'bold'},
    width: 90,
    editable: false,
  },
  {
    field: 'detail',
    headerName: 'Detail Page',
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
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 200,
    sortable: false,
    renderCell: (params) => {
        return (
          <div className="cellAction">
            <Button
              variant="contained"
              color=""
              className={classes.btnDelete}
              startIcon={<DeleteIcon />}
              onClick={() => handleDelete(params.row.id)}>
                Delete
            </Button>
          </div>
        );
    }
  },
];
const rows = [
  { id: "721", stock: 100, name: 'Lipstick', description: 'Jwfgafawdfvadvassvassdvadvadv', price: 20, items: 2, total: 1000 },
  { id: "722", stock: 150, name: 'Matte', description: 'asdvasdvasdvasdvasdvasdv', price: 30, items: 3, total: 1500 },
  { id: "723", stock: 180, name: 'Powder', description: 'Jasdvadvasdvasdvasdvaswdv', price: 40, items: 1, total: 400 },
  { id: "724", stock: 200, name: 'Blush', description: 'Aasdvasdvasvasdvasdvasdv', price: 50, items: 4, total: 1750 },
  { id: "725", stock: 150, name: 'Nails', description: 'Dasdvasdvasdvadvasdv', price:45, items: 3, total: 1200 },
  { id: "726", stock: 110, name: 'Shampoo', description: 'Masdvasdvasdvsdvasdv', price: 50, items: 5, total: 2200 },
  { id: "727", stock: 100, name: 'Lotion', description: 'Cliasdvasdvasdvasdvasdv', price: 15, items: 2, total: 800 },
  { id: "728", stock: 150, name: 'Gel', description: 'Fasdvasdvasvasdvasdv', price: 25, items: 3, total: 1200 },
  { id: "729", stock: 180, name: 'Pencil', description: 'Hasdvasdvasdvasdv', price: 8, items: 1, total: 300 },
  { id: "7210", stock: 100, name: 'Lipstick', description: 'Jwfgafawdfvadvassvassdvadvadv', price: 20, items: 2, total: 1000 },
  { id: "7220", stock: 150, name: 'Matte', description: 'asdvasdvasdvasdvasdvasdv', price: 30, items: 3, total: 1500 },
  { id: "7230", stock: 180, name: 'Powder', description: 'Jasdvadvasdvasdvasdvaswdv', price: 40, items: 1, total: 400 },
  { id: "7240", stock: 200, name: 'Blush', description: 'Aasdvasdvasvasdvasdvasdv', price: 50, items: 4, total: 1750 },
  { id: "7250", stock: 150, name: 'Nails', description: 'Dasdvasdvasdvadvasdv', price:45, items: 3, total: 1200 },
  { id: "7260", stock: 110, name: 'Shampoo', description: 'Masdvasdvasdvsdvasdv', price: 50, items: 5, total: 2200 },
  { id: "7270", stock: 100, name: 'Lotion', description: 'Cliasdvasdvasdvasdvasdv', price: 15, items: 2, total: 800 },
  { id: "7280", stock: 150, name: 'Gel', description: 'Fasdvasdvasvasdvasdv', price: 25, items: 3, total: 1200 },
  { id: "7290", stock: 180, name: 'Pencil', description: 'Hasdvasdvasdvasdv', price: 8, items: 1, total: 300 }
];

  const [data, setData] = useState(rows);
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/orders/${id}`);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h4> Products</h4>
       <Button
        variant="contained"
        className={classes.btnAdd}
        startIcon={<AddShoppingCartIcon />}
        onClick={() => navigate('/create')}>
          Add New Product
      </Button>
      <div style={{ height: 631, width: '100%', backgroundColor: '#fff'}}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}