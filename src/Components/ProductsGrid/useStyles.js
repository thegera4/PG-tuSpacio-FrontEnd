import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  btnAdd:{
    marginBottom: theme.spacing(3),
    marginLeft: '43%',
    backgroundColor: '#257558',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#37af84'
    },
  },
   btnDelete:{
    backgroundColor: '#ff0000',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#ff4d4d'
    },
  },
}));

export default useStyles;