import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { getCategories, postNewProduct } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import LogoIMG from '../../assets/images/img_logo.png';
import { Avatar, Box, Button, FormControl, FormHelperText, Grid, Input, InputAdornment, InputLabel, makeStyles, OutlinedInput, Select, Slider, TextField, Typography } from '@material-ui/core';


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
    margin: {
        margin: theme.spacing(1),
        width: '216px'
    },
    rating: {
        display:"block",
        marginTop: "10px"
    },
    imageBox: {
        margin: 'auto',
    },
    select: {
        width: 300,
    },
    image: {
        height: "150px",
        margin: "20px"
    },
    textField: {
        width: '25ch',
    },
}));

export default function CreateProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();
    const allCategories = useSelector((state) => state.categories);
    // const allProducts = useSelector((state) => state.products)
    const [errors, setErrors] = useState({});
    const [colors, setColors] = useState({
        azul: 0,
        rojo: 0,
        verde: 0
    });
    const [categories, setCategories] = useState([]);

    useEffect ( () => {
        dispatch(getCategories())
    }, [dispatch] )

    const [ input, setInput ] = useState({
        brand: "", //*
        name: "", //*
        price: 0, //*
        price_sign: "", //*
        currency: "", //*
        image_link: "", //*
        description: "", //*
        rating: 0, //*
        product_type: "", //*
        stock: 0, //* no puede ser 0
        tag_list: "",
        product_colors: [],
        status: true,
        categories: [] //*
    });
    /*
        tag_list,
        product_colors,
        status,
    */
    function validation(input) {
        let errors = {};
        if(!input.name || typeof input.name !== "string") {   
            errors.name = "Please insert the name of your product"; }
        if(!input.brand || typeof input.brand !== "string") {   
            errors.brand = "Please insert the brand of your product"; }
        if(!input.description || typeof input.description !== "string") {   
            errors.description = "Please insert the description of your product"; }
        if(!input.price_sign || typeof input.price_sign !== "string") {   
            errors.price_sign = "Please insert the price sign of your product"; }
        if(!input.currency || typeof input.currency !== "string" || input.currency.length > 3) {   
            errors.currency = "Please insert the currency of your product, just 3 letters of the country"; }
        if (!input.categories.length) {
            errors.categories = "Please select at least one category"; }
        if (!input.price) {
            errors.price = "The price cannot be null"; } 
        if (!input.stock) {
            errors.stock = "The price cannot be null"; }
        if (!input.image_link || typeof input.image_link !== "string" ) {
            errors.image_link = "Please insert a valid url image"; }
        if (colors.azul >= 256  ) {
            errors.image_link = "Please insert a valid url image"; }
        return errors;
    }

    function handleChange(e) {
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
        if(errors.name || errors.categories || errors.description ||
            errors.currency || errors.image || errors.price) {
            return alert("Can't create a product. Missing data")}
        input.categories = categories;
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
                position= 'relative'
                width= '100%'
                pt={6}
                m={0}
                display= "flex"
                flexWrap= "wrap"
                justifyContent= "space-evenly"
                
            >
                <Grid item xs={12}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="flex-start"
                        py={1}
                    >
                        <Button 
                            variant="contained" 
                            color="primary"
                            onClick={() => navigate('/home')}
                        > Home </Button>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={(e) => handleSubmit(e)}
                        > Create </Button>
                    </Grid>
                </Grid>
                <Box
                    position="relative"
                    width='30%'
                    // bgcolor="palevioletred"
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    mt={2}
                >
                    <div key='divName'>
                        <TextField
                            required
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
                    
                    <div key='divBrand'>
                        <TextField
                            required
                            id="outlined-name"
                            label="Brand"
                            name="brand"
                            value={input.brand}
                            onChange={(e) => handleChange(e)}
                            variant="outlined"
                        />
                        {
                            errors.brand && (
                                <FormHelperText>{errors.brand}</FormHelperText>
                            )
                        }
                    </div>
                    
                    <div key='divStock'>
                        <TextField
                            required
                            id="outlined-name"
                            label="Stock"
                            name="stock"
                            value={input.stock}
                            onChange={(e) => handleChange(e)}
                            variant="outlined"
                            />
                        {
                            errors.stock && (
                                <FormHelperText>{errors.stock}</FormHelperText>
                            )
                        }
                    </div>

                    <div key='divDesc'>
                        <TextField
                            required
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
                </Box>
                
                <Box
                    // bgcolor="palevioletred"
                    width='30%'
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    mt={2}
                >
                    <Box className={classes.range} key={`divPrice`}>
                        <FormControl fullWidth className={classes.margin} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Price *</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                name="price"
                                value={input.price}
                                onChange={(e) => handleChange(e)}
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                labelWidth={50}
                            />
                        </FormControl>
                        {
                            errors.price && (
                                <FormHelperText>{errors.price}</FormHelperText>
                            )
                        }
                    </Box>
                    <Box key='divPriceSign'>
                        <TextField
                            required
                            id="outlined-name"
                            label="Price Sign"
                            name="price_sign"
                            value={input.price_sign}
                            onChange={(e) => handleChange(e)}
                            variant="outlined"
                            />
                        {
                            errors.price_sign && (
                                <FormHelperText>{errors.price_sign}</FormHelperText>
                            )
                        }
                    </Box>

                    <Box key='divCurr'>
                        <TextField
                            required
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
                    </Box>
                    
                    <Box key='divImg' className={classes.imageBox}>
                        <TextField
                            required
                            id="outlined-name"
                            label="Image"
                            name="image_link"
                            value={input.image_link}
                            onChange={(e) => handleChange(e)}
                            variant="outlined"
                            />
                        {
                            errors.image_link && (
                                <FormHelperText>{errors.image_link}</FormHelperText>
                            )
                        }
                    </Box>
                </Box>
                <Box
                    position="relative"
                    // bgcolor="palevioletred"
                    width='30%'
                    boxSizing='border-box'
                    px={4}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    mt={2}
                >
                    <Box className='typeBox' key='typeBox'>
                        <FormControl variant="filled" className={classes.formControl}>
                            <InputLabel htmlFor="filled-age-native-simple">Select Categories</InputLabel>
                            <Select
                                className={classes.select}
                                native
                                onChange={(e) => handleCategories(e)}
                            >
                                <option aria-label="None" value="" />
                            {
                                allCategories.map( category =>
                                <option value={`${category.name}`}>{`${category.name}`}</option> )
                            }
                            </Select>
                        </FormControl>
                        <Box>
                            {
                                categories.length 
                                    ? categories.map( c => 
                                        <Typography variant="body2" gutterBottom>
                                            <FormHelperText>{`${c}`}</FormHelperText>    
                                        </Typography>
                                        )
                                    : <div></div>
                            }
                            {
                                errors.categories && (
                                    <FormHelperText>{errors.categories}</FormHelperText>
                                )
                            }
                        </Box>
                    </Box>
                    <Box className={classes.rating} key={`divRating`}>
                        <InputLabel htmlFor="filled-age-native-simple">Rating</InputLabel>
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
                    </Box>
                    <img src={input.image || LogoIMG} className={classes.image} alt="imagen de prueba" />  
                </Box>
                <Box>
                    <Button 
                        className={clsx(classes.margin, classes.textField)}
                        variant="contained" 
                        color="primary"
                        onClick={() => console.log()}
                    > Add color </Button>
                    <TextField
                        label=""
                        id="outlined-start-adornment"
                        value={colors.azul}
                        name="azul"
                        onChange={(e)=> setColors({...colors, [e.target.name]: e.target.value })}
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Azul</InputAdornment>,
                            step: 1,
                            min: 0,
                            max: 255,
                            type: 'number',
                            'aria-labelledby': 'input-slider'
                        }}
                        variant="outlined"
                    />
                    <TextField
                        label=""
                        id="outlined-start-adornment"
                        value={colors.rojo}
                        name="rojo"
                        onChange={(e)=> setColors({...colors, [e.target.name]: e.target.value })}
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Rojo</InputAdornment>,
                            step: 1,
                            min: 0,
                            max: 255,
                            type: 'number',
                            'aria-labelledby': 'input-slider'
                        }}
                        variant="outlined"
                    />
                    <TextField
                        label=""
                        id="outlined-start-adornment"
                        value={colors.verde}
                        name="verde"
                        onChange={(e)=> {
                            let valor = e.target.value;
                            setColors({...colors, [e.target.name]: valor })
                        }}
                        className={clsx(classes.margin, classes.textField)}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Verde</InputAdornment>,
                            step: 1,
                            min: 0,
                            max: 255,
                            type: 'number',
                            'aria-labelledby': 'input-slider'
                        }}
                        variant="outlined"
                    />
                    <Avatar className={classes.pink}>
                        {/* <PageviewIcon /> */}
                    </Avatar>
                </Box>
            </Box>
        </form>
    )
}

                        