import React from 'react';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './useStyles';
import { Link }from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Favorite from '@material-ui/icons/Favorite';
import NotFavorite from '@material-ui/icons/FavoriteBorder';
import Box from '@material-ui/core/Box';
import { addToWishlist, removeFromWishlist, addToCart} from '../../actions';
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
    dispatch(addToCart(props.products.id))

}

  return (
    <>
    { !products? <div>Not product Found</div> :
      <Card className={classes.root}>
        <Box
          display="flex"
          justifyContent="end"
          alignItems="end"
          minHeight="3vh">
          <CardActions >
            <Button 
              size="small" 
              onClick={(e) => handleFavorite(e)}>
              {props.favorite ? 
                <Favorite className={classes.iconColors}/> : 
                <NotFavorite className={classes.iconColors}/>} 
            </Button>
            <Button 
              size="small" 
              onClick={(e) => handleCart(e)}>
              <ShoppingCartIcon className={classes.iconColors} />
            </Button>
          </CardActions>   
        </Box>
        <Link to={`/${props.products.id}`}>
          <img className='card-image' src={props.products.image_link} alt="" />
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
                ${Math.ceil(props.products.price)}
            </Box>
            </Typography>  
        </CardContent>
      </Card>
    }
  </>
  )           
}