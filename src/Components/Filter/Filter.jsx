import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Box, Button, Grid } from '@material-ui/core';
import { filterByBrand, filterByCategory, getAllBrands, getCategories, orderByAbc, 
    orderByPrice, setCurrentHomePage, OrderByRating } from '../../actions';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
    },
    margin: {
      margin: 10
    },
    margin2: {
      marginTop: 25,
      marginLeft: 10
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
}));

export default function Filter({setOrder}) {
    const navigate = useNavigate()
    const categories = useSelector((state) => state.categories)
    const brands = useSelector((state) => state.brands)
    const classes = useStyles();
    const dispatch = useDispatch();
    
    useEffect ( () => {
        dispatch(getCategories())
        dispatch(getAllBrands())
    }, [dispatch] )
    
    function handleOrderByAbc(e) {
        e.preventDefault();
        console.log(e.target.value);
        dispatch(orderByAbc(e.target.value));
        dispatch(setCurrentHomePage(1))
        if (e.target.value) setOrder(`Order by ${e.target.value}`)
        else setOrder("")
    }

    function handleOrderByPrice(e) {
        e.preventDefault();
        console.log(e.target.value);
        dispatch(orderByPrice(e.target.value));
        dispatch(setCurrentHomePage(1))
        if (e.target.value) setOrder(`Order by ${e.target.value}`)
        else setOrder("")
    }

    function handlefilterByBrand(e) {
        e.preventDefault();
        console.log(e.target.value);
        dispatch(filterByBrand(e.target.value))
        dispatch(setCurrentHomePage(1))
        if (e.target.value) setOrder(`Filter by ${e.target.value}`)
        else setOrder("")
    }

    function handlefilterByCategory(e) {
        e.preventDefault();
        console.log(e.target.value);
        dispatch(filterByCategory(e.target.value))
        dispatch(setCurrentHomePage(1))
        if (e.target.value) setOrder(`Filter by ${e.target.value}`)
        else setOrder("")
    }

    function handleOrderByRating(e) {
        e.preventDefault();
        console.log(e.target.value);
        dispatch(OrderByRating(e.target.value));
        dispatch(setCurrentHomePage(1))
        if (e.target.value) setOrder(`Order by ${e.target.value}`)
        else setOrder("")
    }

    /*
    nuevos filtros
    todos los datos se pasan por query
    
    alpha ==> asc o desc
    category ==> nombre de la categoria
    price ==> asc o desc
    brand ==> nombre de la marca
    rating ==> asc o desc
    
    */ 
    return (
        <Box
            bgcolor='white'
            boxShadow= '0px 10px 8px 0px rgba(0,0,0,0.18)'
        >
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-end"
            >

                <Grid item xs='auto'>
                    {/* Filter by Brands */}
                    <FormControl className={classes.formControl}>
                        <InputLabel>Brands</InputLabel>
                        <Select
                            native
                            onChange={(e) => handlefilterByBrand(e)}
                        >
                            <option aria-label="None" value="" />
                            {
                                brands.length &&
                                brands.map( b => <option value={`${b}`}>{`${b.toUpperCase()}`}</option> )    
                            }
                        </Select>
                    </FormControl>


                    {/* Filter by Categories */}
                    <FormControl className={classes.formControl}>
                        <InputLabel>Categories</InputLabel>
                        <Select
                            native
                            onChange={(e) => handlefilterByCategory(e)}
                        >
                            <option aria-label="None" value="" />
                            {
                                categories.length &&
                                categories.map( c => <option value={`${c.name}`}>{`${c.name.toUpperCase()}`}</option> )
                            }
                        </Select>
                    </FormControl>


                    {/* Orden alfabetico */}
                    <FormControl className={classes.formControl}>
                        <InputLabel>Sort by Name</InputLabel>
                        <Select
                            native
                            onChange={(e) => handleOrderByAbc(e)}
                        >
                            <option aria-label="None" value="" />
                            <option value="a-to-z">A to Z</option>
                            <option value="z-to-a">Z to A</option>
                        </Select>
                    </FormControl>


                    {/* Orden por Precio */}
                    <FormControl className={classes.formControl}>
                        <InputLabel>Order by Price</InputLabel>
                        <Select
                            native
                            onChange={(e) => handleOrderByPrice(e)}
                        >
                            <option aria-label="None" value="" />
                            <option value='min-max'>Low to High</option>
                            <option value='max-min'>High to Low</option>
                        </Select>
                    </FormControl>

                    {/* Order por Rating */}
                    <FormControl className={classes.formControl}>
                        <InputLabel>Order by Rating</InputLabel>
                        <Select
                            native
                            onChange={(e) => handleOrderByRating(e)}
                        >
                            <option aria-label="None" value="" />
                            <option value='max-min'>5...1</option>
                            <option value='min-max'>1...5</option>
                        </Select>
                    </FormControl>
                        <Button 
                            onClick={() => console.log("Limpiando filtros")}
                            color="secondary"
                            size="small"
                            className={classes.margin2}
                        >
                            Clean Filters
                        </Button>
                    
                </Grid>
                <Grid item xs='auto'>
                    <Button 
                        onClick={() => navigate('/service')}
                        variant="contained" 
                        color="secondary"
                        className={classes.margin}
                    >
                        Beuthy Services
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}