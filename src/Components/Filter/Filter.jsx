import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { filterByCategory, filterByBrand, orderByAbc, orderByPrice } from '../../store/actions'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button, Grid } from '@material-ui/core';
import { filterByBrand, filterByCategory, getAllBrands, getCategories, orderByAbc, orderByPrice, setCurrentHomePage } from '../../actions';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function Filter({setOrder}) {
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

    return (
        <div>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={1}>
                    <Link to="/create">
                            <Button variant="contained" color="primary">Create Product</Button>
                    </Link>
                </Grid>

                <Grid item xs={11}>
                    {/* Orden alfabetico */}
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel htmlFor="filled-age-native-simple">Sort by Name</InputLabel>
                        <Select
                            native
                            onChange={(e) => handleOrderByAbc(e)}
                        >
                            <option aria-label="None" value="" />
                            <option value="asc">A to Z</option>
                            <option value="desc">Z to A</option>
                        </Select>
                    </FormControl>

                    {/* Orden por Precio */}
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel htmlFor="filled-age-native-simple">Order by Price</InputLabel>
                        <Select
                            native
                            onChange={(e) => handleOrderByPrice(e)}
                        >
                            <option aria-label="None" value="" />
                            <option value='min-max'>Low to High</option>
                            <option value='max-min'>High to Low</option>
                        </Select>
                    </FormControl>

                    {/* Filter by Categories */}
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel htmlFor="filled-age-native-simple">Categories</InputLabel>
                        <Select
                            native
                            onChange={(e) => handlefilterByCategory(e)}
                        >
                            <option aria-label="None" value="" />
                            {
                                categories.length &&
                                categories.map( c => <option value={`${c.name}`}>{`${c.name.toLowerCase()}`}</option> )
                            }
                        </Select>
                    </FormControl>
                    
                    {/* Filter by Brands */}
                    <FormControl variant="filled" className={classes.formControl}>
                        <InputLabel htmlFor="filled-age-native-simple">Brands</InputLabel>
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
                </Grid>
            </Grid>
        </div>
    );
}