import { Box, Container, Grid, ThemeProvider } from '@material-ui/core';
import React from 'react';
//import { useNavigate } from 'react-router-dom';
import theme from '../../ThemeConfig';
import AdminTabs from '../AdminTabs/AdminTabs';
import {useSelector } from 'react-redux';
import UsersGrid from '../../Components/UsersGrid/UsersGrid';

export default function Profile() {
  //const navigate = useNavigate()
  //const dispatch = useDispatch()
  const adminOption = useSelector(state => state.adminOption)

  return (
    <ThemeProvider theme={theme}>
      <Box py={2} >
        <Grid 
          container
          direction="column"
          justifyContent="center"
          alignItems="center">
            <Grid>
              <AdminTabs />
            </Grid>
            <Container>
              {
                adminOption === 0 ?
                <UsersGrid />  :
                adminOption === 1 ?
                <h1>Here you'll see the list of Purchase Orders</h1> :
                adminOption === 2 ?
                <h1>Here you'll see the list of Products</h1> :
                adminOption === 3 ?
                <h1>Here you'll see the Notifications options</h1> :
                adminOption === 4 ?
                <h1>Here you'll see the settings</h1> :
                null
              }
            </Container>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}