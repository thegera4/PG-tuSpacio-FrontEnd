import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Box} from '@material-ui/core';
import HomeCards from '../../Components/HomeCards/HomeCards';
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../actions';
import BasicPagination from '../BasicPagination/Pagination';
import LandingPage from '../Landing/Landing';
import mision from '../../assets/images/mision_empresa.png';
// import { flexbox, justifyContent } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  centering: {
   
  }
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  const currentPage = useSelector(state => state.currentPageHome)
  const [productsPerPage] = useState(9);
  const LAST_PRODUCT = currentPage * productsPerPage;
  const FIRST_PRODUCT = LAST_PRODUCT - productsPerPage;
  const RENDERED_PRODUCTS = products.slice(FIRST_PRODUCT, LAST_PRODUCT);

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  // console.log(products)
  return (
    <>
    <Grid container direction='row' >
      <Grid item xs={12}>
      
        <LandingPage />
      
      </Grid>
       
      {/* <Grid item xs={4}>
        <Box
        display="flex" 
        justifyContent="left" 
       
        m={1} 
        pt={10}
        pl={5}
        >
      <img 
        src={mision} 
        alt="mision"
        height='250'
        width='300'
        />
        </Box>
      </Grid> */}
      </Grid>
      <BasicPagination 
        className={classes.centering} 
        currentPage={currentPage}
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        onChange={handleChange}
        />
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid 
            container justifyContent="center" 
            spacing={spacing}>
            {RENDERED_PRODUCTS?.map((product, index) => (
              <Grid key={index} item>
                <HomeCards 
                className={classes.paper} 
                products = {product}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}