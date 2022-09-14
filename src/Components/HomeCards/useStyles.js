import { makeStyles } from '@material-ui/core/styles';
// import { flexbox } from '@mui/system';

const useStyles = makeStyles({
  root: {
    width: 300,
    height: 360,
    border: '1px solid #eceeed',
    margin: 20
  },
  media: {
    height: 200,
    width: 200,
    marginLeft: 50
  },
  content: {
    minHeight: 100,
    height: 'auto',
    backgroundColor: 'f4f4f4'
  },
  iconColors: {
    color: '#257558', 
  },
  tipo: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  price: {
    color: 'crimson'
  },


});

export default useStyles;