import React from 'react'
import './Cart.css'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import notFound from '../../assets/images/not_found.png'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
import { removeFromCart} from '../../actions'




const Cart = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector((state) => state.cart)
    function handleDelete(e){
        dispatch(removeFromCart(e))
        alert('Product deleted')
    }

       const mapped = cartProducts.map(item => item.price)
       let total = mapped.map(c => parseFloat(c)).reduce((a, b) => a + b, 0);


  return (
    <section>
        {cartProducts?.map(item => (
            <div className='detail cart' key={item.id}>
                <div>
                <img src={item.image_link} className='detail-img'/>
                </div>
                <div className='box'>
                    <div className='row'>
                        <h1>{item.name}</h1>
                        <h4>${item.price}</h4>
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <StarBorderIcon />
                        <p>{item.description}</p>
                        <div className='colors'>
                            <h3>Colors : </h3>
                        {item.product_colors?.slice(0, 6).map((color, index) => (
                        <button key={index} style={{background: color.hex_value}}></button>
                        ))}
                        </div>
                        <div className='amount'>
                          <h3>Quantity : </h3>
                          <button className='count'>-</button>
                          <span>0</span>
                          <button className='count'>+</button>
                        </div>
                        
                        <Link to='/checkout'>
                        <button  className='cart'>
                            Checkout
                        </button>
                        </Link>
                        <button  className='fav' onClick={() => handleDelete(item.id)}>
                            Delete
                        </button>
                        {/* <div className='delete'>
                        <Button 
                        size="small" 
                        color="primary"
                        onClick={() => handleDelete(item.id)} >
                        <DeleteForeverIcon />
                        </Button>
                        </div> */}
                        
                    </div>
                    
                </div>
            </div>
         )) }
         <div className='total'>
         <Link to='/checkout'>
                        <button  className='cart'>
                            Checkout
                        </button>
        </Link>
        <h3>Total: ${total}</h3>
         </div>
    </section>
  )
}

export default Cart