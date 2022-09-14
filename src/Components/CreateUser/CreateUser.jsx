import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import useStyles from './useStyles'
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import UserPlaceholder from '../../../src/assets/images/userPlaceholder.jpg'
//import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { ToastContainer, toast } from 'react-toastify';
import { createUser } from '../../actions'
import { useDispatch } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';

function CreateUser() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [values, setValues] = useState({
    name: '',
    nickname: '',
    email: '',
    address: '',
    password: '',
    picture: '',
    showPassword: false,
  });
  const hasNumbers = /\d/g;
  const isValidEmail = RegExp(/^\S+@\S+\.\S+$/);
  const isValidPassword = /^.{6,}$/;

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleCreateUser =() => {
    dispatch(createUser(values))
  }

  const notifyUserCreated = () => 
  toast.success('User was created!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });

  function handleErrorsName(values){
    if(values.name === ''){
      return 'Name is required'
    }
    if(hasNumbers.test(values.name)){
      return 'Name must not contain numbers'
    }
  }

  function handleErrorsNickname(values){
    if(values.nickname === ''){
      return 'Nickname is required'
    }
  }

  function handleErrorsEmail(values){
    if(values.email === ''){
      return 'Email is required'
    }
    if(!isValidEmail.test(values.email)){
      return 'Email is not valid'
    }
  }

  function handleErrorsPassword(values){
    if(values.password === ''){
      return 'Password is required'
    }
    if(!isValidPassword.test(values.password)){
      return 'Password must contain at least 6 characters'
    }
  }

  function handleErrorsAddress(values){
    if(values.address === ''){
      return 'Address is required'
    } 
  }

  return (
    <form className={classes.container} >
        <div className={classes.avatar} >
          <img src={UserPlaceholder} alt="placeholder" />
           {/*<Button
              variant="contained"
              color="default"
              className={classes.upload}
              startIcon={<PhotoCamera />}
              >
              Upload
            </Button>*/}
        </div>
        <div className={classes.firstColumn} >
          <TextField 
            error = { !values.name ? true :
              hasNumbers.test(values.name) ? true : false }
            id="name" 
            type="text" 
            placeholder="Name" 
            helperText={ handleErrorsName(values) }
            onChange={handleChange('name')}
          />
          <TextField
            error = { !values.nickname ? true : false }
            id="nickname" 
            type="text" 
            placeholder="Nickname"
            helperText={ handleErrorsNickname(values) }
            onChange={handleChange('nickname')}
          />
          <TextField
            error = { !values.address ? true : false }
            id="standard-textarea"
            placeholder="Full address"
            multiline
            helperText={ handleErrorsAddress(values) }
            onChange={handleChange('address')}
          />
        </div>
        <div className={classes.secondColumn} >
          <TextField
            error = { !values.email ? true : 
              !isValidEmail.test(values.email) ? true : false }
            id="email" 
            type="email" 
            placeholder="Email"
            helperText={ handleErrorsEmail(values) }
            onChange={handleChange('email')}
          />
          <TextField 
            error = { !values.password ? true : 
              !isValidPassword.test(values.password) ? true : false }
            id="password" 
            type="password"
            placeholder="Password"
            endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}>
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            helperText={ handleErrorsPassword(values) }
            onChange={handleChange('password')}
          />
          <TextField 
                id="picture" 
                type="text" 
                placeholder="Add picture url (Optional)"
                onChange={handleChange('picture')}
          />
        </div>
        <div className={classes.createBtn}>
          <Button
            variant="contained"
            color="primary"
            className={classes.create}
            onClick={() => {
                  handleCreateUser()
                  notifyUserCreated()}}>
              Create User
          </Button>
          <ToastContainer />
        </div>
    </form>
  )
}

export default CreateUser