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
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';

export default function Footer() {
    const classes = useStyles();
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth0();
    return (
        <ThemeProvider theme={theme}>
            <Typography component="h1" variant='subtitle1' >
                <Box
                    className={classes.boxContainer}
                    bgcolor="secondary.dark"
                    color='secondary.contrastText'
                    py={2}
                    m={0}
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
                                <Typography variant="body2" gutterBottom>
                                    <Link href="#" onClick={()=>navigate('/')} color="inherit">
                                        Make up
                                    </Link>
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    <Link href="#" onClick={()=>navigate('/service')} color="inherit">
                                        Dermotherapy
                                    </Link>
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    <Link href="#" onClick={()=>navigate('/service')} color="inherit">
                                        Manicure
                                    </Link>
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    <Link href="#" onClick={()=>navigate('/service')} color="inherit">
                                        Barbershop
                                    </Link>
                                </Typography>
                            </Box>
                        </Grid>
                        
                        <Grid item xs={3}>
                            <Box>
                                <Typography variant="h6" gutterBottom> INFORMATION </Typography>
                                <Typography variant="body2" gutterBottom> How to buy? </Typography>
                                {
                                    isAuthenticated 
                                        ?   <Typography variant="body2" gutterBottom>
                                                <Link href="#" onClick={Logout()} color="inherit">
                                                    Sign out
                                                </Link>
                                            </Typography> 
                                        :   <Typography variant="body2" gutterBottom>
                                                <Link href="#" onClick={Login()} color="inherit">
                                                    Sign in
                                                </Link>
                                            </Typography>
                                }
                                {
                                    isAuthenticated 
                                        ? <Typography variant="body2" gutterBottom>
                                            <Link href="#" onClick={()=>navigate('/profile')} color="inherit">
                                                My acount
                                            </Link>
                                          </Typography>
                                        : <></>
                                }
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
                                    <Grid 
                                        container
                                        direction="row"
                                        justifyContent="flex-start"
                                        alignItems="flex-start"
                                    >
                                        <Grid item xs='auto'>
                                            <Box className={classes.logoCardsBox}>
                                                <img 
                                                    className={classes.logoCardImg} 
                                                    src={visa} 
                                                    alt="logo visa img"
                                                />
                                            </Box>
                                        </Grid>
                                        <Grid item xs='auto'>
                                            <Box className={classes.logoCardsBox}>
                                                <img 
                                                    className={classes.logoCardImgMC} 
                                                    src={mastercard} 
                                                    alt="logo mastercard img"
                                                />
                                            </Box>
                                        </Grid>
                                        <Grid item xs='auto'>
                                            <Box className={classes.logoCardsBox}>
                                                <img 
                                                    className={classes.logoCardImg} 
                                                    src={amex} 
                                                    alt="logo amex img"
                                                    />
                                            </Box>
                                        </Grid>
                                        <Grid item xs='auto'>
                                            <Box className={classes.logoCardsBox}>
                                                    <img 
                                                    className={classes.logoCardImg} 
                                                    src={paypal} 
                                                    alt="logo paypal img"
                                                    />
                                            </Box>
                                        </Grid>
                                    </Grid>
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