import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
 root: {
   maxWidth: 500,
   margin: 'auto',
   marginTop: 100
 },
 media: {
   height: 0,
   paddingTop: '56.25%', // 16:9
 },
 expand: {
   transform: 'rotate(0deg)',
   marginLeft: 'auto',
   transition: theme.transitions.create('transform', {
     duration: theme.transitions.duration.shortest,
   }),
 },
 expandOpen: {
   transform: 'rotate(180deg)',
 },
 avatar: {
   backgroundColor: red[500],
 },
 button: {
   margin: theme.spacing(0),
   borderColor: '#257558',
   color: '#257558',
   width: '100%',
   marginTop: 10
 },
 button2: {
     margin: theme.spacing(0),
     backgroundColor: '#257558',
     color: '#fff',
     width: '100%',
     marginTop: 10
 }
}));

export default useStyles;