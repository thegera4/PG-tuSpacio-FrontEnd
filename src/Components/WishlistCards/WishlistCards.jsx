import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux'
import useStyles from './useStyles';
import { Link }from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Placeholder from '../../assets/images/placeholder_home.png';
import Box from '@material-ui/core/Box';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { removeFromWishlist } from '../../actions'

export default function WishlistCards({props}) {
  const classes = useStyles();
  const dispatch = useDispatch();

  function handleDelete(e){
    e.preventDefault();
    dispatch(removeFromWishlist(props.id))
  }

  return (
    <Card className={classes.root}>
      <CardActionArea  >
        <Box
          display="flex"
          justifyContent="end"
          alignItems="end"
          minHeight="5vh">
          <CardActions >
            <Button size="small"  >
              <ShoppingCartIcon className={classes.iconColors} />
            </Button>
            <Button 
              size="small" 
              onClick={(e) => handleDelete(e)} >
              <DeleteForeverIcon className={classes.iconColors}/>
            </Button>
          </CardActions>   
        </Box>
        <Link to={`/${props.id}`}>
        <CardMedia
          className={classes.media}
          image={props.image_link?
            props.image_link:
            Placeholder} />
        </Link>
          <CardContent 
            className={classes.content}>
            <Typography component="div">
              <Box 
                textAlign="left"  
                fontWeight="fontWeightBold" 
                fontSize={15} >
              {props.name}
              </Box>
            </Typography>
            <Typography component="div" >
            <Box
            display="flex"
            alignItems="center"
            fontWeight="fontWeightBold" 
            fontSize={15}> 
            <AttachMoneyIcon fontSize="small"  />  
              USD {props.price}
            </Box>
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )          
}