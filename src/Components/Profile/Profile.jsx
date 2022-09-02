import { Box, Button, Grid, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import theme from '../../ThemeConfig';

export default function Profile() {
    const navigate = useNavigate()

    return (
        <ThemeProvider theme={theme}>
            <Box
                py={2}
            >
                <Grid 
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={3}>
                        <h1>Profile</h1>
                    </Grid>
                    <Grid item xs={3}>
                        <Button 
                            variant="contained"
                            color="primary"
                            onClick={() => navigate('/')} 
                        > Home </Button>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    )
}