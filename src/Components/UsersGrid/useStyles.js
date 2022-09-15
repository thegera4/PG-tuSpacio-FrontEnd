import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  deleteBtn:{
    backgroundColor: '#ff0000',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#ff4d4d'
    },
  },
  resetBtn:{
    backgroundColor: '#606060',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#37af84'
    },
  },
  btnAdd:{
    marginBottom: theme.spacing(3),
    marginLeft: '45%',
    backgroundColor: '#257558',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#37af84'
    },
  },
}));

export default useStyles;