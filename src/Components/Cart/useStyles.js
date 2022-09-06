import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(0),
      borderColor: '#257558',
      color: '#257558',
      width: 250
    },
    button2: {
        margin: theme.spacing(5),
        backgroundColor: '#257558',
        color: '#fff',
        width: 250,
    },
    table: {
      minWidth: 700,
      width: '80%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 50,
      
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  export default useStyles