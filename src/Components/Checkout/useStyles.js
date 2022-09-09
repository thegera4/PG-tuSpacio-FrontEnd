import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  successWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    minHeight: '60vh',
  },
  success: {
    width: '1000px',
    margin: 'auto',
    marginTop: '80px',
    backgroundColor: '#dcdcdc',
    padding: '50px',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontWeight: 900,
    fontSize: '2rem',
    textAlign: 'center',
  },
  icon: {
    color: theme.palette.primary.main,
    scale: 5
  },
  title: {
    color: theme.palette.primary.dark,
    fontSize: '3rem',
  },
  emailMsg: {
    fontSize: '1.1rem',
    textAlign: 'center',
  },
  description: {
    fontSize: '1.2rem',
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
  email: {
    marginLeft: theme.spacing(1),
    textDecoration: 'none',
  },
  btn: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      transition: 'all 0.3s ease-in-out',
      scale: (1.2),
      backgroundColor: theme.palette.primary.light,
    },
  }
}));

export default useStyles;