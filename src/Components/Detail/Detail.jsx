 import React from 'react'
 import {useDispatch, useSelector} from 'react-redux'
 import {getDetail} from '../../actions/index'
 import { useEffect } from 'react'
 import defaultImage from "../../assets/images/not_found.png"



// const Detail = (props) => {
//     const dispatch = useDispatch()
//     const myProduct = useSelector((state) => state.productDetail)
    


// useEffect(() => {
 
//   dispatch(getDetail(923))   

// }
// , [dispatch])

//   return (
//     <div>

//          {
//         myProduct? 
//         <div className='detail-container'>

//             <img id='imgb'src={myProduct.image_link || defaultImage} alt="img not found" width='20%' height='200px'/>
//             <h2 id='tit' >{myProduct.name}</h2>
//             <h5>{myProduct.brand}</h5>
//             <h5>USD {myProduct.price}</h5>

//             <ul>
//               <li><a>{myProduct.description} </a> </li>
//               <li><a>{myProduct.rating || 0 } </a> </li>
//               <li><a>{myProduct.product_type} </a> </li>
//               <li><a>{myProduct.category} </a> </li>
//             </ul>       
//             <button>Add to favorites</button>
//             <button>Add to Cart</button>
//             </div>
//         :      
//              <div className="loading loading--full-height"></div>    
//        } 
//     </div>
//   )
// }

// export default Detail


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
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Box, Grid, Paper} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    margin: 'auto',
    marginBlock: 20,
  },
  media: {
    height: 20,
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
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const dispatch = useDispatch()
     const myProduct = useSelector((state) => state.productDetail)
    
  // console.log(props)
  const id = 974

 useEffect(() => {
 
   dispatch(getDetail(id))   

 }
 , [dispatch, id])




  return (
    <div className={classes.root}>
       <Grid container spacing={3}>
         <Grid item xs={6}>
          <Card className={classes.root} >
        <CardHeader
          title={myProduct.name}
          subheader={myProduct.brand}
        />
          <CardMedia
            className={classes.media}
            image={myProduct.image_link || defaultImage}
            title={myProduct.name}
          />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
              {myProduct.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="sadd to cart">
            <ShoppingCartIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Rating: {myProduct.rating || 0 }</Typography>
            <Typography paragraph>Type: {myProduct.product_type}</Typography>
            <Typography paragraph>Category: {myProduct.product_category}</Typography>
          
          </CardContent>
        </Collapse>
      </Card>
      </Grid> 
      <Grid item xs={6}>
      <Box
       
        sx={{
          boxShadow: 3,
          width: '12 rem',
          height: '2rem',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        <Typography variant='subtitle1'>
          <Paper>Nombre del Producto</Paper>
        </Typography>
      </Box>
      
      <Box
        sx={{
          boxShadow: 3,
          width: '12 rem',
          // height: '5rem',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        
        <Typography variant='body'>
        $00.00 
        </Typography>
        
      </Box>

      <Box
        sx={{
          boxShadow: 3,
          width: '12 rem',
          // height: '5rem',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}
      >
        
        <Typography variant='subtitle2'>
        DESCRIPCIÓN: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sit adipiscing at habitasse lorem volutpat id. Ipsum urna tortor tempus hendrerit mauris, diam, ante. Sit ultricies sed mauris, consequat. Urna, eu tortor, feugiat id in. Pulvinar sit quis nibh mauris non cursus blandit. 
        </Typography>
        
      </Box>
      
      </Grid>
    </Grid>
    </div>
    );
    }


// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

// export default function CenteredGrid() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Paper className={classes.paper}>xs=12</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
      // </Grid>
      // </div>
      // );
      // }
    