import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCategories, postNewProduct } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import LogoIMG from '../../assets/images/img_logo.png';
import { Box, Button, FormControl, FormHelperText, Grid, 
InputAdornment, InputLabel, OutlinedInput, Select, Slider, 
TextField, Typography, withStyles } from '@material-ui/core';
import clsx from 'clsx';
<<<<<<< HEAD
import useStyles from './useStyles';
=======

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
        width: 250,
    },
    image: {
        width: "200px",
        margin: "20px"
    },
    textField: {
        width: '25ch',
    },
    colors: {
        margin: theme.spacing(1),
        width: '10px',
    }
}));
>>>>>>> 73f5e36ce79f95295d781d95ac3e0d49b072db90

export default function CreateProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();
    const allCategories = useSelector((state) => state.categories);
    const [errors, setErrors] = useState({});
    const [colors, setColors] = useState({
        azul: 0,
        rojo: 0,
        verde: 0,
    });
    const [categories, setCategories] = useState([]);
    const [addColors, setAddColors] = useState([]);
    
    let fColor = `#${parseInt(colors.rojo).toString(16)}${parseInt(colors.verde).toString(16)}${parseInt(colors.azul).toString(16)}`
    
    function handlerColors(colors) {
        if (parseInt(colors.azul) >= 256 || parseInt(colors.verde) >= 256 || parseInt(colors.rojo) >= 256 ||
            parseInt(colors.azul) < 0 || parseInt(colors.verde) < 0 || parseInt(colors.rojo) < 0 ) { 
            return alert("The value of the colors must be a number between 0 and 255");
        }
        let hexAzul = parseInt(colors.azul).toString(16);
        let hexRojo = parseInt(colors.rojo).toString(16);
        let hexVerde = parseInt(colors.verde).toString(16);
        let newColor = `#${hexRojo}${hexVerde}${hexAzul}`
        if (addColors.includes(newColor)) return alert("Color already added");
        setAddColors([...addColors, newColor])
        setColors({azul: 0,rojo: 0,verde: 0});
    }    

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
   
    function validation(input) {
        let errors = {};
        if(!input.name || typeof input.name !== "string") {   
            errors.name = "Please insert the name of your product"; }
        if(!input.brand || typeof input.brand !== "string") {   
            errors.brand = "Please insert the brand of your product"; }
        if(!input.description || typeof input.description !== "string") {   
            errors.description = "Please insert the description of your product"; }
        if(!input.product_type || typeof input.product_type !== "string") {   
            errors.product_type = "Please insert the type of your product"; }
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
        if (!input.rating) {
            errors.rating = "The rating cannot be null"; } 
        if (!input.image_link || typeof input.image_link !== "string" ) {
            errors.image_link = "Please insert a valid url image"; }
        return errors;
    }

    function handleChange(e) {
        // console.log(e)
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

    function handlerDeleteColor(color) {
        setAddColors(addColors.filter(c => c!==color))
    }
    
    function handleSubmit(e){
        // e.preventDefault();
        if (errors.name || errors.categories || errors.description ||
            errors.currency || errors.image_link || errors.price || errors.brand 
            || errors.price_sign || errors.stock || errors.rating || errors.product_type) {
            return alert("Can't create a product. Missing data")}
        input.categories = categories;
        input.product_colors = addColors;
        dispatch(postNewProduct(input))
        alert("Product created successfully!!");
        setInput({
            brand: "", 
            name: "", 
            price: 0, 
            price_sign: "", 
            currency: "", 
            image_link: "", 
            description: "",
            rating: 0, 
            product_type: "", 
            stock: 0,
            tag_list: "",
            product_colors: [],
            status: true,
            categories: [] 
        })
        navigate('/') // ver a que dirección me voy a ir luego de generar un nuevo producto
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
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                
            >
                <Grid item xs={12}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="flex-start"
                        py={1}
                    >
                        {/* <Button 
                            variant="contained" 
                            color="primary"
                            onClick={() => navigate('/home')}
                        > Home </Button> */}
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={(e) => handleSubmit(e)}
                        > Create </Button>
                    </Grid>
                </Grid>
                <Box
                    position="relative"
                    width='250px'
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    mt={2}
                    marginX={3}
                >
                    <div key='divName'>
                        <TextField
                            required
                            id="outlined-name"
                            label="Name"
                            name="name"
                            value={input.name}
                            onChange={(e) => handleChange(e)}
                            className={classes.formControl}
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
                            className={classes.formControl}
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
                            className={classes.formControl}
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
                            className={classes.formControl}
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
                    width='250px'
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    mt={2}
                    marginX={3}
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
                                className={classes.textField}
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
                    width='250px'
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    p={4}
                    marginX={3}
                >
                    <img src={input.image_link || LogoIMG} className={classes.image} alt="imagen de prueba" />
                    {
                        input.image_link && (
                            <FormHelperText>Image preview</FormHelperText> 
                        )
                    }
                </Box>
                <Box
                    position="relative"
                    width='300px'
                    boxSizing='border-box'
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    mt={2}
                    px={2}
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
                    <Box key='divStock'>
                        <TextField
                            required
                            id="outlined-name"
                            label="Product Type"
                            name="product_type"
                            value={input.product_type}
                            onChange={(e) => handleChange(e)}
                            variant="outlined"
                            />
                        {
                            errors.product_type && (
                                <FormHelperText>{errors.product_type}</FormHelperText>
                            )
                        }
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
                </Box>
                <Box
                    display="flex"
                    flexWrap="wrap"
                    alignContent="center"
                    alignItems="center"
                    py={2}
                >
                    <Box
                        border={1}
                        width="40px"
                        height="40px"
                        borderColor="primary.main"
                        borderRadius="50%"
                        bgcolor={fColor} 
                    />
                    <Button 
                        className={clsx(classes.margin, classes.textField)}
                        variant="contained" 
                        color="primary"
                        onClick={() => handlerColors(colors)}
                    > Add color </Button>
                    <TextField
                        label=""
                        id="outlined-start-adornment"
                        value={colors.azul}
                        name="azul"
                        onChange={(e)=> {
                            setColors({...colors, [e.target.name]: e.target.value })
                            console.log(fColor)
                        }}
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
                        onChange={(e)=> {
                            setColors({...colors, [e.target.name]: e.target.value })
                            console.log(fColor)
                        }}
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
                            console.log(fColor)
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
                    <Box
                        display='flex'
                    >
                        {
                            addColors.length 
                                ? addColors.map(color => {
                                    const ColorButton = withStyles((theme) => ({
                                        root: {
                                          backgroundColor: `${color}`,
                                          margin:"8px",
                                          border:"2px",
                                          borderColor:"primary",
                                          width:"10px",
                                          height:"25px",
                                          '&:hover': {
                                            backgroundColor: `${color}`,
                                          },
                                        },
                                    }))(Button);
                                    
                                    return <ColorButton 
                                            variant="contained" 
                                            color="primary"
                                            onClick={() => handlerDeleteColor(color)}
                                            className={classes.margin} >
                                        x
                                        </ColorButton>
                                    }
                                    )
                                : <FormHelperText>No color added yet</FormHelperText>
                        }
                    </Box>
                </Box>
            </Box>
        </form>
    )
}

                        