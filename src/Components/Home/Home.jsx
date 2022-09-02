import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import HomeCards from '../../Components/HomeCards/HomeCards';
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../actions';
import BasicPagination from '../BasicPagination/Pagination';
import useStyles from './useStyles';
import LandingPage from '../Landing/Landing';

export default function SpacingGrid(order) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  const favorites = useSelector(state => state.favorites)
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

  function productIsFavorite(productID) {
    return favorites.some(favorite => favorite.id === productID)
  }

  return (
    <>
    <Grid container direction='row' >
      <Grid item xs={12}>
        {order && <LandingPage />}
      </Grid>
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
                favorite = {productIsFavorite(product.id)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
} 