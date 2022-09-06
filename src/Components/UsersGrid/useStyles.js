import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button:{
    backgroundColor: '#ff0000',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#ff4d4d'
    },
  },
  btnAdd:{
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: '45%',
    backgroundColor: '#257558',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#37af84'
    },
  },
}));

export default useStyles;