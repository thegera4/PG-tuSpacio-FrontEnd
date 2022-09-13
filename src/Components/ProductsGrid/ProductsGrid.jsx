import * as React from 'react';
import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@material-ui/core';
import PageviewIcon from '@material-ui/icons/Pageview';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useNavigate } from 'react-router-dom';
import useStyles from './useStyles';
import DeleteIcon from '@material-ui/icons/Delete';
import { getAllProducts } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function ProductsGrid() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const products = useSelector(state => state.products);
  

  useEffect(() => {
    dispatch(getAllProducts())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
    field: 'review',
    headerName: 'Review',
    width: 120,
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
              color="primary"
              endIcon={<PageviewIcon>send</PageviewIcon>}
              onClick={() => handleReview(params.row.id)}>
                Post
            </Button>

            <Link to={`/${params.id}`}>
            <Button
              variant="contained"
              color=""
              className={classes.btnDelete}
              startIcon={<DeleteIcon />}
              /*onClick={() => handleDelete(params.row.id)}*/>
                Delete
            </Button>
            </Link>

          </div>
        );
    }
  },

  ];

  const rows = products?.map(product => {
    return {
      id: product.id,
      stock: product.stock,
      name: product.name,
      description: product.description || 'No description',
      price: product.price
    }
  });


  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/${id}`);
  };

  const handleDelete = (id) => {
    products.filter((item) => item.id !== id);
  };

  const handleReview = (id) => {
    navigate(`/reviews/${id}`);
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
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}