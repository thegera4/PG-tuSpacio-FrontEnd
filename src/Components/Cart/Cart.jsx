import React from 'react'
import './Cart.css'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import notFound from '../../assets/images/not_found.png'
import StarBorderIcon from '@material-ui/icons/StarBorder';

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart)
  return (
    <>
        {cartProducts?.map(item => (
            <div className='detail' key={item.id}>
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
                        <div className='select'>
                        <h3>Quantity : </h3>
                        <select name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                        </select>
                        </div>
                        
                        <Link to='/cart' className='cart'>
                            Checkout
                        </Link>
                        <Link to='/cart' className='fav'>
                            Delete
                        </Link>
                    </div>
                    
                </div>
            </div>
         )) }
    </>
  )
}

export default Cart