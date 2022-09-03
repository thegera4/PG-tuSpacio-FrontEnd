import * as React from 'react';
import Box from '@material-ui/core/Box';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton'
import { ThemeProvider } from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core'
import useStyles from './useStyles';
import visa from '../../assets/images/visa.png';
import amex from '../../assets/images/amex.png';
import mastercard from '../../assets/images/mastercard.png';
import paypal from '../../assets/images/paypal.png';
import theme from '../../ThemeConfig';

export default function Footer() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Typography component="h1" variant='subtitle1' >
                <Box
                    className={classes.boxContainer}
                    bgcolor="secondary.dark"
                    color='secondary.contrastText'
                    py={2}
                >
                    <Grid 
                        container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="flex-start"
                    >
                        <Grid item xs={3}>
                            <Box>
                                <Typography variant="h6" gutterBottom> PRODUCTS </Typography>
                                <Typography variant="body2" gutterBottom> Make Up </Typography>
                                <Typography variant="body2" gutterBottom> Dermocosmetics </Typography>
                                <Typography variant="body2" gutterBottom> Manicure </Typography>
                                <Typography variant="body2" gutterBottom> Barbershop </Typography>
                            </Box>
                        </Grid>
                        
                        <Grid item xs={3}>
                            <Box>
                                <Typography variant="h6" gutterBottom> INFORMATION </Typography>
                                <Typography variant="body2" gutterBottom> How to buy? </Typography>
                                <Typography variant="body2" gutterBottom> My count </Typography>
                                <Typography variant="body2" gutterBottom> Sign in </Typography>
                                <Typography variant="body2" gutterBottom> About us </Typography>
                            </Box>
                        </Grid>
                        
                        <Grid item xs={3}>
                            <Box>
                                <Box>
                                    <Typography variant="h6" gutterBottom> FOLLOW US! </Typography>
                                    <Box>
                                        <IconButton aria-label="TwitterIcon" color='inherit'>
                                            <TwitterIcon />
                                        </IconButton>
                                        <IconButton aria-label="FacebookIcon" color='inherit'>
                                            <FacebookIcon />
                                        </IconButton>
                                        <IconButton aria-label="InstagramIcon" color='inherit'>
                                            <InstagramIcon />
                                        </IconButton>
                                        <IconButton aria-label="GitHubIcon" color='inherit'>
                                            <GitHubIcon />
                                        </IconButton>
                                    </Box>
                                </Box>
                                <br />
                                <Box>
                                    <Typography variant="h6" gutterBottom>
                                        WE ACEPT
                                    </Typography>
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
                            </Box>
                        </Grid>
                        
                        <Grid item xs={10}>
                            <Box py={1} >
                                <Typography variant='caption'>
                                    2022 - TODOS LOS DERECHOS RESEVADOS
                                </Typography>
                            </Box>
                        </Grid>
                            
                    </Grid>
                </Box>
            </Typography>
        </ThemeProvider>
    );
}