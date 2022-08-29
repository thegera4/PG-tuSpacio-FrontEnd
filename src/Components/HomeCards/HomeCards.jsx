import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
//import Favorite from '@material-ui/icons/Favorite';
import NotFavorite from '@material-ui/icons/FavoriteBorder';
import Placeholder from '../../assets/images/placeholder_home.png';
export default function HomeCards(props) {
  const classes = useStyles();

  console.log(props)
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.products.image_link?
            props.products.image_link:
            Placeholder}/>
        <CardContent>
          <Typography 
            gutterBottom variant="h6" 
            component="h2">
              {props.products.name}
          </Typography>
          <Typography 
            variant="body2" 
            color="textSecondary" 
            component="p">
            {props.products.description ?
              props.products.description.substring(0, 100) 
              + '...' :
              'No description available'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <NotFavorite />
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}