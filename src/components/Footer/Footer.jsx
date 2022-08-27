import * as React from 'react';
import Box from '@mui/material/Box';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ThemeProvider } from '@mui/system';
import theme from '../../ThemeConfig';
import { Grid, IconButton } from '@mui/material';
import useStyles from './useStyles';
import visa from '../../assets/images/visa.png';
import amex from '../../assets/images/amex.png';
import mastercard from '../../assets/images/mastercard.png';
import paypal from '../../assets/images/paypal.png';

export default function Footer() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Grid container>
                <Box className={classes.boxContainer}
                    bgcolor="secondary.dark"
                    color="primary.contrastText"
                >

                    <Grid item xs={0} md={3}>
                        <Box>
                            <h2 className='h2Style'>PRODUCTS</h2>
                            <h4 className='h4Style'>Make Up</h4>
                            <h4 className='h4Style'>Dermocosmetics</h4>
                            <h4 className='h4Style'>Manicure</h4>
                            <h4 className='h4Style'>Barbershop</h4>
                        </Box>
                    </Grid>
                    
                    <Grid item xs={0} md={3}>
                        <Box>
                            <h2 className='h2Style'>INFORMATION</h2>
                            <h4 className='h4Style'>How to buy?</h4>
                            <h4 className='h4Style'>My count</h4>
                            <h4 className='h4Style'>Sign in</h4>
                            <h4 className='h4Style'>About us</h4>
                        </Box>
                    </Grid>
                    
                    <Grid item xs={9} md={3}>
                        <Box>
                            <h2 className='h2Style'>FOLLOW US!</h2>
                            <IconButton color="inherit" >
                                    <TwitterIcon />
                            </IconButton>
                            <IconButton color="inherit" >
                                    <FacebookIcon />
                            </IconButton>
                            <IconButton color="inherit" >
                                    <LinkedInIcon />
                            </IconButton>
                            <IconButton color="inherit" >
                                    <InstagramIcon />
                            </IconButton>
                            <h2 className='h2Style'>WE ACEPT</h2>
                            <Box className={classes.logoCardsBox}>
                                <img 
                                    className={classes.logoCardImg} 
                                    src={visa} 
                                    alt="logo visa img"
                                />
                                <img 
                                    className={classes.logoCardImgMC} 
                                    src={mastercard} 
                                    alt="logo mastercard img"
                                />
                                <img 
                                    className={classes.logoCardImg} 
                                    src={amex} 
                                    alt="logo amex img"
                                />
                                <img 
                                    className={classes.logoCardImg} 
                                    src={paypal} 
                                    alt="logo paypal img"
                                />
                            </Box>
                        </Box>
                    </Grid> 
                    
                    <Grid item xs={9}>
                        <Box>
                            2022 ALL RIGHTS RESERVED
                        </Box>
                    </Grid>
                
                </Box>
            </Grid>   
        </ThemeProvider>
        );
}
            