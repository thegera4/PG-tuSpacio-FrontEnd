import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
    },
    margin: {
        margin: theme.spacing(1),
        width: '216px'
    },
    rating: {
        display:"block",
        marginTop: "10px"
    },
    imageBox: {
        margin: 'auto',
    },
    select: {
        width: 250,
    },
    image: {
        width: "200px",
        margin: "20px"
    },
    textField: {
        width: '25ch',
    },
    colors: {
        width: '10px',
    }
}));

export default useStyles;