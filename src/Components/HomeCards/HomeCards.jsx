import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector } from 'react-redux'
import useStyles from './useStyles';
import { Link }from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Payment from '@material-ui/icons/Payment';
//import Favorite from '@material-ui/icons/Favorite';
import NotFavorite from '@material-ui/icons/FavoriteBorder';
import Placeholder from '../../assets/images/placeholder_home.png';
import Box from '@material-ui/core/Box';
export default function HomeCards(props) {
  const classes = useStyles();
  const products = useSelector(state => state.products)
  // console.log(props)
  return (
    <>
    { !products? <div>Not product Found</div> :

      <Card className={classes.root}>
        <CardActionArea  >
        <Box
      display="flex"
      justifyContent="end"
      alignItems="end"
      minHeight="5vh"
      >
      <CardActions >
            <NotFavorite />
            <ShoppingCartIcon />
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
          {/* <Typography 
            variant="body2" 
            color="textSecondary" 
            component="p">
            {props.products.description ?
              props.products.description.substring(0, 100) 
              + '...' :
              'No description available'}
            </Typography> */}
            <Typography component="div">
              <Box textAlign="left"  fontWeight="fontWeightBold" fontSize={15} >
              {props.products.name}
              </Box>
            </Typography>
            <Typography component="div" >
            <Box
            display="flex"
            alignItems="center"
            fontWeight="fontWeightBold" 
            fontSize={15}
            > 
            
            <Payment fontSize="small"  />  USD {props.products.price}  
            </Box>
             
            </Typography>
            
        </CardContent>
      </CardActionArea>

    
    </Card>
            }
            </>
  )
            
}