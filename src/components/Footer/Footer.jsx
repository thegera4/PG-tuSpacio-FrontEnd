import * as React from 'react';
import Box from '@mui/material/Box';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ThemeProvider } from '@mui/system';
import theme from '../themeConfig';

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