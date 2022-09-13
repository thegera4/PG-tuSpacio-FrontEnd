import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {ServiceJson, ProviderService} from './BeutyService'
import { Box, Button, FormControl, Grid, InputLabel, Select, TextField, ThemeProvider, Typography } from '@material-ui/core';
import LogoIMG from '../../assets/images/img_logo.png';
import theme from '../../ThemeConfig';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    marginTop: 50
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  detailImg : {
    height: 300,
    width: 300
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250,
    paddingTop: 5
  },
}));

export default function DetailService() {
  const classes = useStyles();
  const [service, setService] = useState('');
  const [provider, setProvider] = useState('');

  function handleService(e) {
    return setService(e.target.value);
  };

  function handleProvider(e) {
    return setProvider(e.target.value);
  };

  return (
        <ThemeProvider theme={theme}>
            <Box
                display='flex'
                FlexWarp='wrap'
                flex-direction='row'
                p={5}
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                >
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom>
                            Chose how to take care of yourself...
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Box
                            p={1}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            border={1}
                            borderRadius="borderRadius"
                            borderColor='primary.main'
                            height={300}
                            width={300}
                        >
                            <img 
                                src={service
                                        ? `${ServiceJson.filter(s => s.name === service)[0].img}`
                                        : LogoIMG } 
                                className={classes.detailImg}
                                alt='imagen de servicio'
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="strech"
                        >
                            <Typography variant="h4" gutterBottom>
                                $ {service 
                                        ? provider 
                                        ? ProviderService.filter(p => p.name === provider)[0].price[service]
                                        : "---"
                                        : "---" } 
                            </Typography>
                            <FormControl className={classes.formControl}>
                                <InputLabel>Service</InputLabel>
                                <Select
                                    native
                                    onChange={(e) => handleService(e)}
                                    >
                                    <option aria-label="None" value="" />
                                    {
                                        ServiceJson.map( s => <option value={`${s.name}`}>{`${s.name}`}</option> )    
                                    }
                                </Select>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <InputLabel>Provider</InputLabel>
                                <Select
                                    native
                                    onChange={(e) => handleProvider(e)}
                                    >
                                    <option aria-label="None" value="" />
                                    {
                                        service && ProviderService
                                        .filter(p => p.service.includes(service))
                                        .map( p => <option value={`${p.name}`}>{`${p.name}`}</option> )    
                                    }
                                </Select>
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <TextField
                                    id="date"
                                    label="Select date day"
                                    type="date"
                                    defaultValue=""
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                />
                            </FormControl>
                            <form className={classes.formControl} noValidate>
                                <TextField
                                    id="time"
                                    label="Select date time"
                                    type="time"
                                    defaultValue="10:00"
                                    className={classes.textField}
                                    InputLabelProps={{
                                    shrink: true,
                                    }}
                                    inputProps={{
                                    step: 3000, // 5 min
                                    }}
                                />
                            </form>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="stretch"
                            >
                            <Grid item xs={12}>
                                <Typography variant="body1" gutterBottom>Description:</Typography>
                                <Typography variant="body2" gutterBottom>
                                {service 
                                    ? ServiceJson.filter(s => s.name === service)[0].description
                                    : "Select your service" }
                                </Typography>
                            </Grid>
                            <Button variant="contained" size="large" color="primary" className={classes.margin}>
                                Add to Cart
                            </Button>
                            <Button variant="outlined" size="large" color="primary" className={classes.margin}>
                                Add to Favorites
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}