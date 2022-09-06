import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Box, Button, Grid, Hidden } from '@material-ui/core';
import { getAllBrands, getCategories, setCurrentHomePage, orderCombine } from '../../actions';
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
    const [filters, setFilters] = useState({
        "alpha": "",
        "category": "",
        "price": "",
        "brand": "",
        "rating": ""
    })

    /*
    nuevos filtros
    todos los datos se pasan por query
    
    alpha ==> asc o desc
    category ==> nombre de la categoria
    price ==> asc o desc
    brand ==> nombre de la marca
    rating ==> asc o desc
    
    */ 

    const dispatch = useDispatch();
    
    useEffect ( () => {
        dispatch(getCategories())
        dispatch(getAllBrands())
    }, [dispatch] )
    
    function handlefilter(e) {
        e.preventDefault();
        // console.log(filters)
        dispatch(orderCombine({...filters, [e.target.name]: e.target.value}));
        dispatch(setCurrentHomePage(1))
        let {alpha,category,price,brand,rating}=filters
        setOrder(`filters by ${alpha,category,price,brand,rating}`)
    }

    return (
        <Box
            bgcolor='white'
            // boxShadow= '0px 10px 8px 0px rgba(0,0,0,0.18)'
            position= 'fixed'
            top= {60}
            left= {0}
            zIndex= {800}
            width="100%"
        >
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-end"
            >
                <Grid item xs='auto'>
                <Hidden smDown>
                    {/* Filter by Brands */}
                    <FormControl className={classes.formControl}>
                        <InputLabel>Brands</InputLabel>
                        <Select
                            native
                            name="brand"
                            onChange={ (e) => {
                                setFilters({...filters, "brand": e.target.value});
                                handlefilter(e)
                            }}
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
                            name="category"
                            onChange={(e) => {
                                setFilters({...filters, "category": e.target.value});
                                handlefilter(e)
                            }}
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
                            name="alpha"
                            onChange={(e) => {
                                setFilters({...filters, "alpha": e.target.value});
                                handlefilter(e)
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value="asc">A to Z</option>
                            <option value="desc">Z to A</option>
                        </Select>
                    </FormControl>
                    

                    {/* Orden por Precio */}
                    <FormControl className={classes.formControl}>
                        <InputLabel>Order by Price</InputLabel>
                        <Select
                            native
                            name="price"
                            onChange={(e) => {
                                setFilters({...filters, "price": e.target.value});
                                handlefilter(e)
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value='asc'>Low to High</option>
                            <option value='desc'>High to Low</option>
                        </Select>
                    </FormControl>
                    </Hidden>
                    <Hidden smDown>
                    {/* Order por Rating */}
                    <FormControl className={classes.formControl}>
                        <InputLabel>Order by Rating</InputLabel>
                        <Select
                            native
                            name="rating"
                            onChange={(e) => {
                                setFilters({...filters, "rating": e.target.value});
                                handlefilter(e)
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value='desc'>5...1</option>
                            <option value='asc'>1...5</option>
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
                        </Hidden>
                </Grid>
                <Hidden mdDown>
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
                </Hidden>
            </Grid>
        </Box>
    );
}