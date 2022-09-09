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
      backgroundColor: '#ff3b3b'
    },
  },
  processing:{
    color: '#FFAC1C'
  },
  completed:{
    color: '#0F8C02'
  },
  cancelled:{
    color: '#DF0C0C'
  },
}));

export default useStyles;