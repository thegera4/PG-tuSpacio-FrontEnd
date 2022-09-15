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
    marginLeft: '20vw',
    marginRight: '20vw',
  },
  avatar:{
    marginRight: 100,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    '& img':{
      width: '250px',
      height: '250px',
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
    '& > *':{
      marginBottom: 30,
    }
  },
  upload:{
    marginTop: 20,
  },
  url:{
    marginTop: 50,
    width: 400,
  },
  createBtn: {
    position: 'relative',
    width: 200,
    top: 250,
    right: 250,
  }
}));

export default useStyles;