import React, {useState} from 'react'
import './Cart.css'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { removeFromCart, addToCart, clearCart, removeOne} from '../../actions'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "auto",
    flexGrow: 1,
    margin: 'auto',
    height: '80vh',
    marginTop: 50
  },
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

  
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
 
const Cart = () => {

    const [input, setInput] = useState({})

    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cart)
    const classes = useStyles();
    
    function handleDelete(e){
        dispatch(removeFromCart(e))
        alert('Do you want delete product?')
    }
  

    let mapped= cartProducts.map(item => item.quantity * Math.ceil(item.price))
    let total = mapped.map(c => parseFloat(c)).reduce((a, b) => a + b, 0) ;



    const handleIncrement = (id) => {
      dispatch(addToCart(id))
    }

    const handleDecrement = (id) => {
      dispatch(removeOne(id))
    }

   const handleClear = () => {
    dispatch(clearCart())
    alert('Do you want delete all ?')
   }
      
    return (

    < div className='contenedor-gral'>
    { cartProducts.length === 0 ? <Box
          textAlign="center"
          marginBottom="20px" 
          marginTop="100px"
          fontWeight="fontWeightBold"
          fontSize={30}>
            Your Cart is Empty
        </Box> : 
        <div >
    <TableContainer component={Paper}  className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartProducts?.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
               <img src={row.image_link} alt="" className='row-image'/>
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">$ {Math.ceil(row.price) * row.quantity}</StyledTableCell>
              <StyledTableCell align="right">
              <button className='count' onClick={() => handleDecrement(row.id)}>-</button>
              <span id = 'span'>{row.quantity}</span>
              <button className='count' onClick={() => handleIncrement(row.id)}>+</button>
              </StyledTableCell>
              <StyledTableCell align="right">
              <Button 
              size="small" 
              onClick={() => handleDelete(row.id)} >
              <DeleteIcon />
            </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

            <div className='total'>
            <Button
              variant="contained"
              className={classes.button}
              onClick={() => handleClear()}
              startIcon={<DeleteIcon />}
             >
             delete all
            </Button>
            <Link to='/checkout'>
            <Button
              variant="contained"
              className={classes.button2}
              startIcon={<MonetizationOnIcon />}
             >
             Payment
            </Button>
            </Link>
         <h3>Total: ${total}</h3>
          </div>
      </div> }
    </div>
  )
}

export default Cart