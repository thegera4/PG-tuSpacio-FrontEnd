import React from 'react'
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux' // useSelector
import { Link }from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Box from '@material-ui/core/Box';
import { addToCart} from '../../actions';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    root: {
      width: 300,
      height: 370,
      border: '1px solid #eceeed',
      margin: 20
    },
    media: {
      height: 300,
    },
    content: {
      minHeight: 100,
      height: 'auto',
      backgroundColor: 'f4f4f4'
    },
    iconColors: {
      color: '#257558', 
    },
    tipo: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    price: {
      color: 'crimson'
    },
    button2: {
  
      backgroundColor: '#257558',
      color: '#fff',
      width: 150,
      marginTop: 20,
  },

  btnCont : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  
  
  });




const LandingCards = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    // const products = useSelector(state => state.products)
    let navigate = useNavigate();
    
    
    function handleCart(e) {
        e.preventDefault()
        dispatch(addToCart(props.products.id))
        navigate('/cart')
    
    }



  return (
    <div>
        <Card className={classes.root}>
        <Box
          display="flex"
          justifyContent="end"
          alignItems="end"
          minHeight="3vh">
        </Box>
        <Link to={`/${props.products.id}`}>
          <img className='card-image' src={props.products.image_link} alt="" />
         </Link>
        
          <CardContent className={classes.content}>
          <div className={classes.tipo}>
            <Typography component="div">
              <Box 
                textAlign="left"  
                fontWeight="fontWeightBold" 
                fontSize={15} >
              {props.products.name}
              </Box>
            </Typography>
            <Typography component="div" className={classes.price}   >
            <Box
            display="flex"
            alignItems="center"
            fontWeight="fontWeightBold" 
            fontSize={15}> 
                ${Math.ceil(props.products.price)}
            </Box>
            </Typography>  
            </div>
            <Typography component="div">
              <Box 
                textAlign="left"  
                fontWeight="fontWeightBold" 
                fontSize={13} >
              {props.products.brand?.toUpperCase()}
              </Box>
            </Typography>
            <div className={classes.btnCont}>
            <Button
              variant="contained"
              className={classes.button2}
              onClick={(e) => handleCart(e)}
              startIcon={<ShoppingCartIcon />}
              size='small'
             >
             Buy Now!
            </Button>
            </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default LandingCards