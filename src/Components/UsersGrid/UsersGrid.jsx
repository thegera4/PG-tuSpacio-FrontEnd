import * as React from 'react';
import { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './useStyles';
//import PersonAddIcon from '@material-ui/icons/PersonAdd';
//import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import axios from 'axios';
import { getAllUsers, deleteUser } from '../../actions';

export default function UsersGrid() {
  const classes = useStyles();
  //const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  
  //actualizar render cuando se elimina un usuario
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch, users]);

  const columns = [
  { field: 'id', headerName: 'ID', width: 40,},
    {
    field: 'sid',
    headerName: 'SID',
    type: 'image',
    width: 300,
    editable: false,
  },
  {
    field: 'nickname',
    headerName: 'Nickname',
    width: 150,
    editable: false,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 200,
    editable: false,
  },
  {
    field: 'email',
    headerName: 'E-mail',
    type: 'email',
    width: 200,
    editable: false,
  },
  {
    field: 'delete',
    headerName: 'Delete',
    width: 140,
    sortable: false,
    renderCell: (params) => {
        return (
          <div className="cellAction">
            <Button
              variant="contained"
              className={classes.deleteBtn}
              startIcon={<DeleteIcon />}
              onClick={() => {
                dispatch(deleteUser(params.row.id))
                notifyUserDeleted()}}>
                Delete
            </Button>
            <ToastContainer />
          </div>
        );
    }
  },
   {
    field: 'password',
    headerName: 'Password',
    width: 150,
    sortable: false,
    renderCell: (params) => {
        return (
          <div className="cellAction">
            <Button
              variant="contained"
              color=""
              className={classes.resetBtn}
              startIcon={<RotateLeftIcon />}
              onClick={() => {
                axios.post('http://localhost:3001/api/users/reset')}}>
                Reset
            </Button>
            <ToastContainer />
          </div>
        );
    }
  },
  ];

  const ActiveUsers = users.filter((user) => user.status === true);

  const rows = ActiveUsers.map((user) => {
      return {
        id: user.id,
        sid: user.sid? user.sid : 'No SID',
        nickname: user.nickname,
        name: user.name,
        age: user.age,
        email: user.email,
      };
  });

  const notifyUserDeleted = () => 
  toast.success('User was deleted!', {
    position: "top-left",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });

  /*const notifyUserChangePass = () => 
  toast.info('Password reset was sent!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });*/

  console.log(ActiveUsers)

  return (
    <div>
      <h4>Users</h4>
      {/*<Button
          variant="contained"
          className={classes.btnAdd}
          startIcon={<PersonAddIcon />}
          onClick={() => navigate('/createUser')}>
            Add New User
        </Button>*/}
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
