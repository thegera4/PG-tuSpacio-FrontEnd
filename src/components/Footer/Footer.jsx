import * as React from 'react';
import Box from '@material-ui/core/Box';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton'
import { ThemeProvider } from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core'
import theme from '../../ThemeConfig';

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
        <Typography component="div" variant='subtitle1' >
        <Box
            bgcolor="secondary.main"
            color='secondary.contrastText'
            py={4}
        >
        <Grid container
        spacing={3}
        direction='row'
        >
            <Grid item 
            xs={3}
            >
                <Box >
                    PRODUCTOS
                </Box>
            </Grid>
            <Grid item xs={3}>
            <Box>
                INFORMACIÓN
            </Box>
            </Grid>
            <Grid item xs={3}>
            <Box>
                    
                    SEGUINOS
                    <Box>
                    <IconButton aria-label="TwitterIcon">
                        <TwitterIcon />
                    </IconButton>
                    <IconButton aria-label="FacebookIcon">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton aria-label="InstagramIcon">
                        <InstagramIcon />
                    </IconButton>
                    <IconButton aria-label="GitHubIcon">
                        <GitHubIcon />
                    </IconButton>
                    </Box>
            </Box>
            </Grid>
            <Grid item xs={3}>
            <Box>
                ¡SUSCRIBITE AHORA!
            </Box>
            </Grid>
            <Grid item xs={12}>
            <Box>
                ACEPTAMOS
                <Box>
                    faltan imágenes de tarjetas
                </Box>
            </Box>
            <Box
            pt={3}
            
            >
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