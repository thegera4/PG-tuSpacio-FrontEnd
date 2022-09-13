import React, {useState} from 'react'
import { Input, TextField, Button } from '@material-ui/core'
import useStyles from './useStyles'
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import UserPlaceholder from '../../../src/assets/images/userPlaceholder.jpg'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateUser() {
  const classes = useStyles()
  const [values, setValues] = useState({
    email: '',
    password: '',
    firstName: '',
    LastName: '',
    image: '',
    country: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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

  return (
    <form className={classes.container} >
        <div className={classes.avatar} >
          <img src={UserPlaceholder} alt="placeholder" />
           <Button
              variant="contained"
              color="default"
              className={classes.upload}
              startIcon={<PhotoCamera />}
              >
              Upload
            </Button>
            <ToastContainer />
        </div>
        <div className={classes.firstColumn} >
        <Input id="name" type="text" placeholder="Name" />
        <Input id="nickname" type="text" placeholder="Nickname" />
        <TextField
          id="standard-textarea"
          placeholder="Address"
          multiline/>
        </div>
        <div className={classes.firstColumn} >
        <Input id="email" type="email" placeholder="Email" />
        <Input 
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
            } />
           <Button
              variant="contained"
              color="primary"
              className={classes.create}
              onClick={notifyUserCreated}>
              Create User
            </Button>
            </div>
    </form>
  )
}

export default CreateUser