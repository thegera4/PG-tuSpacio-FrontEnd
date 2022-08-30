import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCategories, postNewProduct } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, FormControl, FormHelperText, Grid, InputLabel, makeStyles, Select, Slider, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
    },
}));

export default function CreateProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();
    const allCategories = useSelector((state) => state.categories);
    const allProducts = useSelector((state) => state.products)
    const [errors, setErrors] = useState({});
    const [categories, setCategories] = useState([]);

    useEffect ( () => {
        dispatch(getCategories())
    }, [dispatch] )

    const [ input, setInput ] = useState({
        name: "",
        description: "",
        price: 0,
        currency: "",
        image: "",
        rating: 0,
        categories: []
    });

    function validation(input) {
        let errors = {};
        if(!input.name || typeof input.name !== "string") {   
            errors.name = "Please insert the name of your product"; } 
        if(!input.description || typeof input.description !== "string") {   
            errors.description = "Please insert the description of your product"; }
        if(!input.currency || typeof input.currency !== "string" || input.currency.length > 3) {   
            errors.currency = "Please insert the currency of your product, just 3 letters of the country"; }
        if (!input.categories.length) {
            errors.categories = "Please select at least one category"; }
        if (!input.price) {
            errors.price = "The price cannot be null"; } 
        if (!input.image || typeof input.image !== "string" ) {
            errors.image = "Please insert a valid url image"; }
        return errors;
    }

    function handleChange(e) {
        // e.preventDefault();
        // console.log({
        //     [e.target.name] : e.target.value
        // })
        console.log(e)
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validation({
            ...input,
            [e.target.name] : e.target.value,
            categories: categories
        }))
        // console.log(errors)
    }

    const handleChangePrice = (event, newValue) => {
        setInput({
            ...input,
            price : newValue
        })
        setErrors(validation({
            ...input,
            price : newValue,
            categories: categories
        }))
    };

    const handleChangeRating = (event, newValue) => {
        setInput({
            ...input,
            rating : newValue
        })
        setErrors(validation({
            ...input,
            rating : newValue,
            categories: categories
        }))
    };

    let handleCategories = (e) => {
        // e.preventDefault();
        if (!categories.length) {
            setCategories([e.target.value])
            setErrors(validation({...input, categories: [e.target.value]}))
        } else if (!categories.includes(e.target.value)) {
            if (categories.length === 2) {
                categories.pop()
                setCategories([...categories, e.target.value]) 
                setErrors(validation({...input, categories: categories}))    
            } 
            setCategories([...categories, e.target.value])
            setErrors(validation({...input, categories: categories}))
            } else if (categories.includes(e.target.value)) {
                setCategories(categories.filter(c => c !== e.target.value))
                setErrors(validation({...input, categories: categories}))
            } 
    }
        
    function handleSubmit(e){
        // e.preventDefault();
        if(errors.name || errors.categories || errors.description || errors.currency || errors.image || errors.price) {
            return alert("Can't create a product. Missing data")}
        input.categories = categories;
        input["brand"] = "Avon";
        input["product_type"] = "prueba";
        input["product_colors"] = ["blue"];
        dispatch(postNewProduct(input))
        alert("Product created successfully!!");
        setInput({
            name: "",
            description: "",
            price: 0,
            currency: "",
            image: "",
            rating: 0,
            categories: []
        })
        navigate('/')
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">

            <Box
                display= 'flex'
                flexWrap= 'wrap'
                position= 'relative'
                width= '100%'
                py={2}
                // px={2}
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="flex-start"
                >
                    <Box
                        display= 'flex'
                        flexWrap= 'wrap'
                        position= 'relative'
                        width= '100%'
                        py={2}
                        
                    >
                        <Grid item xs={10}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="space-around"
                                alignItems="flex-start"
                            >
                                <Grid item xs={4}>
                                    <Link to="/">
                                        <Button variant="contained" color="primary"> Home </Button>
                                    </Link>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        onClick={(e) => handleSubmit(e)}> Create 
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                        
                    <Grid item xs={3}>
                        <div key='divName'>
                            <TextField
                                id="outlined-name"
                                label="Name"
                                name="name"
                                value={input.name}
                                onChange={(e) => handleChange(e)}
                                variant="outlined"
                            />
                            {
                                errors.name && (
                                    <FormHelperText>{errors.name}</FormHelperText>
                                )
                            }
                        </div>

                        <div key='divImg'>
                            <TextField
                                id="outlined-name"
                                label="Image"
                                name="image"
                                value={input.image}
                                onChange={(e) => handleChange(e)}
                                variant="outlined"
                                />
                            {
                                errors.image && (
                                    <FormHelperText>{errors.image}</FormHelperText>
                                )
                            }
                        </div>

                        <div key='divDesc'>
                            <TextField
                                id="outlined-name"
                                label="Description"
                                name="description"
                                value={input.description}
                                onChange={(e) => handleChange(e)}
                                variant="outlined"
                                />
                            {
                                errors.description && (
                                    <FormHelperText>{errors.description}</FormHelperText>
                                )
                            }
                        </div>
                        
                        <div key='divCurr'>
                            <TextField
                                id="outlined-name"
                                label="Currency"
                                name="currency"
                                value={input.currency}
                                onChange={(e) => handleChange(e)}
                                variant="outlined"
                                />
                            {
                                errors.currency && (
                                    <FormHelperText>{errors.currency}</FormHelperText>
                                )
                            }
                        </div>
                    </Grid>
                        
                    <Grid item xs={3}>
                        <div className='range' key={`divPrice`}>
                            <Typography id="non-linear-slider" gutterBottom>
                                Price
                            </Typography>
                            <Slider
                                value={parseInt(input.price)}
                                min={0}
                                step={0.1}
                                max={100}
                                scale={(x) => x}
                                name="price"
                                onChange={handleChangePrice}
                                valueLabelDisplay="auto"
                                aria-labelledby="non-linear-slider"
                            />
                            {
                                errors.price && (
                                    <FormHelperText>{errors.price}</FormHelperText>
                                )
                            }
                        </div>
                        <div className='range' key={`divRating`}>
                            <Typography id="non-linear-slider" gutterBottom>
                                Rating
                            </Typography>
                            <Slider
                                defaultValue={0}
                                aria-labelledby="discrete-slider-small-steps"
                                step={1}
                                marks
                                min={0}
                                max={5}
                                valueLabelDisplay="auto"
                                value={parseInt(input.rating)}
                                name="range"
                                onChange={handleChangeRating}
                            /> 
                        </div>
                    </Grid>
                            
                    <Grid item xs={3}>
                        <label className='textCreate' key='textCreate'>Select Categories</label> <br />
                        <div className='typeBox' key='typeBox'>
                            <FormControl variant="filled" className={classes.formControl}>
                                <InputLabel htmlFor="filled-age-native-simple">Select Category</InputLabel>
                                <Select
                                    native
                                    onChange={(e) => handleCategories(e)}
                                >
                                    <option aria-label="None" value="" />
                                {
                                    allCategories.map( category =>
                                    <option value={`${category.name}`}>{`${category.name}`}</option> )
                                }
                                </Select>
                                <Typography variant="body2" gutterBottom>
                                    {
                                        categories.length &&
                                            categories.map( c => 
                                                <FormHelperText>{`${c}`}</FormHelperText>    
                                            )
                                    }
                                </Typography>
                            </FormControl>
                        </div>
                        {
                            errors.categories && (
                                <FormHelperText>{errors.categories}</FormHelperText>
                            )
                        }
                    </Grid>
                    
                </Grid>
            </Box>
        </form>
    )
}
                        