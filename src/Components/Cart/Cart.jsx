import React, {useState} from 'react'
import './Cart.css'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { deleteNotification, removeFromCart} from '../../actions'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(0),
      borderColor: '#257558',
      color: '#257558',
      width: '100%'
    },
    button2: {
        margin: theme.spacing(0),
        backgroundColor: '#257558',
        color: '#fff',
        width: '100%'
    }
  }));

const Cart = () => {
    const [count, setCount] = useState(1)
    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cart)
    const classes = useStyles();
    function handleDelete(e){
        dispatch(removeFromCart(e))
        dispatch(deleteNotification())
        alert('Do you want delete product?')
    }
  
    function handleIncrement(){
       setCount(count + 1)
    }

    function handleDecrement(){
        if(count>1){
            setCount(count - 1)
        }else {
            return
        }
        
     }
  


       const mapped = cartProducts.map(item => item.price)
       let total = mapped.map(c => parseFloat(c)).reduce((a, b) => a + b, 0) * count;


  return (
    <section>
        {cartProducts?.map(item => (
            <div className='detail cart' key={item.id}>
                <div>
                <img src={item.image_link} className='cart-img'/>
                </div>
                <div className='box'>
                    <div className='row'>
                        <div className='price'>
                        <h3>{item.name}</h3>
                        <h4>${item.price * count}</h4>
                        </div>
                        <Box component="fieldset" borderColor="transparent" m={0} p={0}>
                        <Rating name="read-only" value={item.rating} readOnly precision={0.1} size="medium"/>
                        </Box>
                        <div className='colors'>
                            <h3>Colors : </h3>
                        {item.product_colors?.slice(0, 6).map((color, index) => (
                        <button key={index} style={{background: color.hex_value}}></button>
                        ))}
                        </div>
                        <div className='amount'>
                          <h3>Quantity : </h3>
                          <button className='count' onClick={() => handleDecrement(item.price)}>-</button>
                          <span>{count}</span>
                          <button className='count' onClick={() => handleIncrement()}>+</button>
                        </div>
                        {/* <button  className='fav' onClick={() => handleDelete(item.id)}>
                            Delete
                        </button> */}
                             <Button
                                variant="outlined"
                                className={classes.button}
                                startIcon={<DeleteIcon />}
                                onClick={() => handleDelete(item.id)}
                            >
                            Delete
                            </Button>
                        
                    </div>
                    
                </div>
            </div>
         )) }
         <div className='total'>
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
    </section>
  )
}

export default Cart