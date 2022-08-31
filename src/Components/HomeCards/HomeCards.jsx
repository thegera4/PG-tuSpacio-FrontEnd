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
//import Favorite from '@material-ui/icons/Favorite';
import NotFavorite from '@material-ui/icons/FavoriteBorder';
import Placeholder from '../../assets/images/placeholder_home.png';
export default function HomeCards(props) {
  const classes = useStyles();
  const products = useSelector(state => state.products)
  // console.log(props)
  return (
    <>
    { !products? <div>Not product Found</div> :

      <Card className={classes.root}>
      <CardActionArea >
      <CardActions>
            <NotFavorite />
            <ShoppingCartIcon />
      </CardActions>   

        <Link to={`/${props.products.id}`}>
        <CardMedia
          className={classes.media}
          image={props.products.image_link?
            props.products.image_link:
            Placeholder} />
              </Link>
          <Typography 
            gutterBottom variant="h7" 
            component="h2">
              {props.products.name}
          </Typography>
        <CardContent>
          {/* <Typography 
            variant="body2" 
            color="textSecondary" 
            component="p">
            {props.products.description ?
              props.products.description.substring(0, 100) 
              + '...' :
              'No description available'}
          </Typography> */}
            <Typography 
            gutterBottom variant="h6" 
            component="h2">
              {props.products.price}
          </Typography>
        </CardContent>
      </CardActionArea>

    
    </Card>
            }
            </>
  )
            
}