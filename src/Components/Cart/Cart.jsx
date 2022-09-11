import React from 'react'
import './Cart.css'
import {useDispatch, useSelector} from 'react-redux'
import Button from '@material-ui/core/Button';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { removeFromCart, addToCart, clearCart, removeOne, createCart} from '../../actions'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@material-ui/core/Box';
import { useAuth0 } from '@auth0/auth0-react';
import useStyles from './useStyles';
import { StyledTableCell, StyledTableRow } from './withStyles';
import axios from 'axios';
 
const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart)
  const classes = useStyles();
  const { user, isAuthenticated } = useAuth0();

  function handleDelete(e){
    dispatch(removeFromCart(e))
    alert('Do you want to delete the product?')
  }
  
  let mapped= cartProducts?.map(item => item.quantity * Math.ceil(item.price))
  let total = mapped?.map(c => parseFloat(c)).reduce((a, b) => a + b, 0) ;

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

  const handleCheckout = (cartProducts) => {
    if (isAuthenticated) {
      dispatch(createCart(cartProducts, user.sub))
      axios.post("http://localhost:3001/api/checkout", {
        cartProducts,
        id: user.sub,
      }).then((res) => {
        res.data.url ? window.location.href = res.data.url : alert("Error") 
      }).catch((err) => {
        console.error(err)
      })
    }
    else{
      alert("Please login to checkout")
    }
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
            <Button
              variant="contained"
              className={classes.button2}
              startIcon={<MonetizationOnIcon />}
              onClick={() => handleCheckout(cartProducts)}
             >
             Payment
            </Button>
         <h3>Total: ${total}</h3>
          </div>
      </div> }
    </div>
  )
}

export default Cart