 import React, {useState} from 'react'
 import {useDispatch, useSelector} from 'react-redux'
 import {useParams} from "react-router-dom"
 import {getDetail, addToCart, addToWishlist, removeFromWishlist, addNotification} from '../../actions/index'
 import { useEffect } from 'react'
 import defaultImage from "../../assets/images/not_found.png"
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import { Link } from 'react-router-dom';
import notFound from '../../assets/images/not_found.png'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';



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

 

  useEffect(() => {
 
    dispatch(getDetail(id))   

  }
  , [dispatch])

  

  function handleCart(e) {
      if(!cart.includes(e)) {
        dispatch(addToCart(e))
        dispatch(addNotification())
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




  return (
    // <Card className={classes.root} >
    //   <CardHeader
        
    //     title={myProduct.name}
    //     subheader={myProduct.brand}
    //   />
    //   <CardMedia
    //     className={classes.media}
    //     image={myProduct.image_link || defaultImage}
    //     title={myProduct.name}
    //   />
    //   <CardContent>
    //     <Typography variant="body2" color="textSecondary" component="p">
    //     {myProduct.description}
    //     </Typography>
    //   </CardContent>
    //   <CardActions disableSpacing>
    //     <IconButton aria-label="add to favorites">
    //       <FavoriteIcon />
    //     </IconButton>
    //     <IconButton aria-label="sadd to cart">
    //       <ShoppingCartIcon />
    //     </IconButton>
    //     <IconButton
    //       className={clsx(classes.expand, {
    //         [classes.expandOpen]: expanded,
    //       })}
    //       onClick={handleExpandClick}
    //       aria-expanded={expanded}
    //       aria-label="show more"
    //     >
    //       <ExpandMoreIcon />
    //     </IconButton>
    //   </CardActions>
    //   <Collapse in={expanded} timeout="auto" unmountOnExit>
    //     <CardContent>
    //       <Typography paragraph>Rating: {myProduct.rating || 0 }</Typography>
    //       <Typography paragraph>Type: {myProduct.product_type}</Typography>
    //       <Typography paragraph>Category: {myProduct.product_category}</Typography>
    //       <Typography paragraph>Colors: </Typography>
    //      <div className='colors'>
    //       {myProduct.product_colors?.slice(0, 6).map((color, index) => (
    //           <button key={index} style={{background: color.hex_value}}></button>
    //       ))
    //       }
    //      </div>
    //     </CardContent>
    //   </Collapse>
    // </Card>
    <div className='detail' key={item.id}>
                <div className='breadcrums'>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link color="inherit" href="/" >
                   Products
                  </Link>
                  <Link color="inherit"  >
                    {item.category}
                  </Link>
                  <Typography color="textPrimary">{item.name}</Typography>
                </Breadcrumbs>
                </div>
                <div>
                <img src={item.image_link} className='detail-img'/>
                <div className='image-list'>
                <img src={item.image_link} className='detail-img-small'/>   
                <img src={notFound} className='detail-img-small'/> 
                <img src={notFound} className='detail-img-small'/> 
                </div>
                </div>
                <div className='box'>
                    <div className='row'>
                        <h1>{item.name}</h1>
                        <ul className='tag'>
                        {item.tag_list?.map((ele, index) => (
                        <p key={index} >{ele}</p>
                        ))}
                        </ul>
                        <h4>${item.price}</h4>
                        
                        <Box component="fieldset" borderColor="transparent" m={0} p={0}>
                        <Rating name="read-only" value={item.rating} readOnly precision={0.1} size="large"/>
                        </Box>

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
                        <Button
                          variant="contained"
                          className={classes.button2}
                          startIcon={<ShoppingCartIcon />}
                          onClick={(e) => handleCart(item)}
                          >
                          ADD TO CART
                          </Button>
                        
                        {/* <button className='cart' onClick={(e) => handleCart(item)}>
                            Add to Cart
                        </button> */}
                        
                        {/* <button className='fav' onClick={(e) => handleFavorite(item)}>
                            Add to Favorites
                        </button> */}
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