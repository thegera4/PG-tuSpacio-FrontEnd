import { makeStyles } from '@material-ui/core/styles';
// import { padding } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  boxContainer : {
    // paddingTop: 4,
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    bottom: 0,
    marginTop:50
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
    paddingLeft: 12,
    paddingBottom: 12
  },
    
}));

export default useStyles;