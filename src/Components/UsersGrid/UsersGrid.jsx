import * as React from 'react';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './useStyles';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { useNavigate } from 'react-router-dom';

export default function UsersGrid() {
  const classes = useStyles();
  const navigate = useNavigate();

  const columns = [
  { field: 'id', headerName: 'ID', width: 90,},
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'E-mail',
    type: 'email',
    width: 160,
    editable: false,
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
              className={classes.button}
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
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, email: 'jsnow@got.com'},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, email: 'clani@got.com' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, email: 'jlani@got.com' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, email: 'astark@got.com' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, email: 'dracarys@got.com' },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, email: 'liss@got.com' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, email: 'ffrr@got.com' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, email: 'fross@got.com' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, email: 'rharv@got.com' },
];

  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  return (
    <div style={{ height: 535, width: '100%', backgroundColor: '#fff'}}>
      <Button
        variant="contained"
        className={classes.btnAdd}
        startIcon={<PersonAddIcon />}
        onClick={() => navigate('/createUser')}>
          Add New User
      </Button>
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
