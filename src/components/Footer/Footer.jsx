import * as React from 'react';
import Box from '@material-ui/core/Box';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../ThemeConfig';

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
        <Box
            bgcolor="secondary.main"
        >
            <Box>
                PRODUCTOS
            </Box>
            <Box>
                INFORMACIÓN
            </Box>
            <Box>
                SEGUINOS
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
            <Box>
                Suscribite Ahora!
            </Box>
            <Box>
                ACEPTAMOS
            </Box>
            <Box>
                2022 TODOS LOS DERECHOS RESEVADOS
            </Box>
        </Box>
    </ThemeProvider>
    );
}