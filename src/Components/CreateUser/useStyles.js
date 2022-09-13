import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  container:{
    marginTop: 150,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  avatar:{
    marginRight: 100,
    marginLeft: 100,
    display: 'flex',
    flexDirection: 'column',
    '& img':{
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      objectFit: 'cover',
    },
    '& input':{
      display: 'none',
    },
  },
  firstColumn:{
    display: 'flex',
    flexDirection: 'column',
    marginRight: 100,
    '& > *':{
      marginBottom: 30,
    }
  },
  secondColumn:{
    display: 'flex',
    flexDirection: 'column',
    marginTop: 150,
    '& > *':{
      marginBottom: 30,
    }
  },
  upload:{
    marginTop: 20,
  },
}));

export default useStyles;