import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from "react-router-dom"
import {getDetail, addToCart, addToWishlist, removeFromWishlist} from '../../actions/index'
import { useEffect } from 'react'
import defaultImage from "../../assets/images/not_found.png"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import ReactImageMagnify from 'react-image-magnify';




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

export default function RecipeReviewCard() {
 const { id } = useParams()

 const classes = useStyles();
 const [expanded, setExpanded] = React.useState(false);

 const handleExpandClick = () => {
   setExpanded(!expanded);
 };



 const dispatch = useDispatch()
 const item = useSelector((state) => state.productDetail)
 const cart = useSelector((state) => state.cart)
 const fav = useSelector((state) => state.favorites)
 const [count, setCount] = useState(1)

 const [color,setColor] = useState('')

 const image = item.image_link


 useEffect(() => {

   dispatch(getDetail(id))   

 }
 , [dispatch])

 

 function handleCart(e) {
     if(!cart.includes(e)) {
       dispatch(addToCart(e))
     }
     else {
       alert('The product is already added to the cart')
     }
 }
 function handleFavorite(e) {
   !fav.includes(e)?
   dispatch(addToWishlist(e)) :
   dispatch(removeFromWishlist(e.id))
 }

  const handleColor = (e) => {
   setColor(e)
  }

  console.log(color)


 return (
  
   <div className='detail' key={item.id}>
               <div className='breadcrums'>
               <Breadcrumbs aria-label="breadcrumb">
                 <Link to="/home" >
                  Products
                 </Link>
                 <Link to='/home'>
                   {item.category}
                 </Link>
                 <Typography color="textPrimary">{item.name}</Typography>
               </Breadcrumbs>
               </div>
               <div className='image-list'>
               <img src={item.image_link || defaultImage} className='detail-img-small'/> 
               </div>  
               <div className='image-cont'>
               
               <ReactImageMagnify {...{
                   smallImage: {
                       isFluidWidth: true,
                       src: image,
                   },
                   largeImage: {
                       src: image,
                       width: 800,
                       height: 800,
                   }
               }} />
               </div>

               <div className='box'>
                   <div className='row'>
                       <h1>{item.name}</h1>
                       <h3>By {item.brand}</h3>
                       <ul className='tag'>
                       {item.tag_list?.map((ele, index) => (
                       <p key={index} >{ele}</p>
                       ))}
                       </ul>
                       <h3>${Math.ceil(item.price)}</h3>
                       
                       <Box component="fieldset" borderColor="transparent" m={0} p={0} >
                       <Rating name="read-only" value={item.rating} readOnly precision={0.1} size="large" zIndex={-1}/>
                       </Box>
                       <p>{item.description}</p>
                       <div className='colors'>
                           <h3>Colors : </h3>
                       {item.product_colors?.slice(0, 6).map((color, index) => (
                       <button key={index} style={{background: color.hex_value}} onClick={() => handleColor(color.hex_value)}></button>
                       ))}
                       </div>

                       <Button
                         variant="contained"
                         className={classes.button2}
                         startIcon={<ShoppingCartIcon />}
                         onClick={() => handleCart(item.id)}
                         >
                         ADD TO CART
                         </Button>
                       

                       <Button
                               variant="outlined"
                               className={classes.button}
                               startIcon={<FavoriteIcon />}
                               onClick={(e) => handleFavorite(item)}
                           >
                           ADD TO FAVORITES
                           </Button>
                       
                   </div>
                   
               </div>
           </div>
 );
}