import React from 'react'
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { useSelector } from 'react-redux'
import Box from '@material-ui/core/Box';
import useStyles from './useStyles'
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const classes = useStyles();
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const totalAmount = useSelector((state) => state.totalAmount)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {error, paymentMethod} = 
    await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if(!error){
      const { id } = paymentMethod;
      try {
      const{data} = await axios.post('http://localhost:3001/api/checkout', {
        id,
        amount: totalAmount * 100, //multiplicar por 100 porque en stripe se manejan centavos
      });
      console.log(data);
      alert(data.msg);
      elements.getElement(CardElement).clear();
      navigate('/')
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}
    style={{width: '300px', margin: 'auto', display: 'block'}}>
      <Box
        textAlign="center"
        marginTop="-20px"
        marginBottom="-20px" 
        fontWeight="fontWeightBold"
        fontSize={20}>
          Fast Payment
      </Box> 
      <img 
        src="https://www.logo.wine/a/logo/Stripe_(company)/Stripe_(company)-Powered-by-Stripe-Logo.wine.svg"
        alt="stripe logo"
        style={{width: '150px', margin: 'auto', display: 'block'}}/>
      <CardElement />
      <Button
        className={classes.btnbuy}
        variant="contained"
        color="primary"
        startIcon={<MonetizationOnIcon />}
        type="submit">
        Buy
      </Button>
    </form>
  )
}

export default Checkout