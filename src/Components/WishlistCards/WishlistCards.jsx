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
import NotFavorite from '@material-ui/icons/FavoriteBorder';
import Placeholder from '../../assets/images/placeholder_home.png';
import Box from '@material-ui/core/Box';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function WishlistCards() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea  >
        <Box
          display="flex"
          justifyContent="end"
          alignItems="end"
          minHeight="5vh">
          <CardActions >
            <ShoppingCartIcon />
            <DeleteForeverIcon />
          </CardActions>   
        </Box>
        {/*<Link to={`/${props.products.id}`}>*/}
        <CardMedia
          className={classes.media}
          image={Placeholder}/*{props.products.image_link?
            props.products.image_link:
            /*Placeholder}*/ />
        {/*</Link>*/}
          <CardContent className={classes.content}>
            <Typography component="div">
              <Box textAlign="left"  fontWeight="fontWeightBold" fontSize={15} >
              {/*props.products.name*/}Nombre del producto
              </Box>
            </Typography>
            <Typography component="div" >
            <Box
            display="flex"
            alignItems="center"
            fontWeight="fontWeightBold" 
            fontSize={15}> 
            <AttachMoneyIcon fontSize="small"  />  USD 25.00{/*props.products.price*/}  
            </Box>
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )          
}