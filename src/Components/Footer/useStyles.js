import { makeStyles } from '@material-ui/core/styles';
// import { padding } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  boxContainer : {
    paddingBotton: 40,
    paddingTop: 4,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    // fontFamily: 'roboto' 
  },
  logoCardsBox: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  logoCardImg:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',    
    height: '30px',
  },
  logoCardImgMC: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',    
    height: '30px',
    paddingLeft: 12
  },
  
}));

export default useStyles;