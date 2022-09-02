import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './useStyles';
import { Link }from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Favorite from '@material-ui/icons/Favorite';
import NotFavorite from '@material-ui/icons/FavoriteBorder';
import Placeholder from '../../assets/images/placeholder_home.png';
import Box from '@material-ui/core/Box';
import { addToWishlist, removeFromWishlist, addToCart } from '../../actions';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

export default function HomeCards(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products)
 
  function handleFavorite(e) {
    e.preventDefault()
    !props.favorite ?
    dispatch(addToWishlist(props.products)) :
    dispatch(removeFromWishlist(props.products.id))
  }
  function handleCart(e) {
    e.preventDefault()
    if(!props.cart) {
      dispatch(addToCart(props.products))
      alert('Product has been added to Cart')
    }else {
      alert('The product is already added to the cart')
    }
  }

  return (
    <>
    { !products? <div>Not product Found</div> :
      <Card className={classes.root}>
        <CardActionArea  >
        <Box
          display="flex"
          justifyContent="end"
          alignItems="end"
          minHeight="5vh">
          <CardActions >
            <Button 
              size="small" 
              color="primary" 
              onClick={(e) => handleFavorite(e)}>
              {props.favorite ? 
                <Favorite /> : <NotFavorite />} 
            </Button>
            <Button 
              size="small" 
              color="primary"
              onClick={(e) => handleCart(e)}>
              <ShoppingCartIcon />
            </Button>
          </CardActions>   
        </Box>
        <Link to={`/${props.products.id}`}>
          <CardMedia
            className={classes.media}
            image={props.products.image_link?
              props.products.image_link:
              Placeholder} />
        </Link>
          <CardContent className={classes.content}>
            <Typography component="div">
              <Box 
                textAlign="left"  
                fontWeight="fontWeightBold" 
                fontSize={15} >
              {props.products.name}
              </Box>
            </Typography>
            <Typography component="div" >
            <Box
            display="flex"
            alignItems="center"
            fontWeight="fontWeightBold" 
            fontSize={15}> 
              <AttachMoneyIcon 
                fontSize="small"  />  
                USD {props.products.price}  
            </Box>
            </Typography>  
        </CardContent>
      </CardActionArea>
    </Card>
    }
  </>
  )           
}