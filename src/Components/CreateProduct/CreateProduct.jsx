import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCategories, postNewProduct } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import LogoIMG from '../../assets/images/img_logo.png';
import { Box, Button, FormControl, FormHelperText, Grid, 
InputAdornment, InputLabel,makeStyles, Select, Slider, 
Snackbar, TextField, Typography, withStyles } from '@material-ui/core';
import clsx from 'clsx';
// import { Alert } from '@material-ui/lab';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 150,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
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
        position: "absolute",
        width: "150px",
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
    
    const [open, setOpen] = React.useState(false);

    // const handleClick = () => {
    //     setOpen(true);
    // };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') { return; }
        // console.log('entre aqui?')
        setOpen(false);
    };

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
    
    function handleClick() { 
        setOpen(true);
        console.log(`entre y cambie open a ${open}`)
    };

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

    // const handleChangePrice = (event, newValue) => {
    //     setInput({
    //         ...input,
    //         price : newValue
    //     })
    //     setErrors(validation({
    //         ...input,
    //         price : newValue,
    //         categories: categories
    //     }))
    // };

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
            return alert("Can't create a product. Missing data")
            // <>
            // { handleClick() }
            // <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            //     <Alert onClose={handleClose} severity="error">
            //         Can't create a product. Missing data
            //     </Alert>
            // </Snackbar> 
            // </> 
        }
        
        input.categories = categories;
        input.product_colors = addColors;
        dispatch(postNewProduct(input))
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
        return <Alert severity="success">Product created successfully!!</Alert>
        // navigate('/') // ver a que dirección me voy a ir luego de generar un nuevo producto
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <Box
                position= 'relative'
                width= '100%'
                py={2}
                m={0}
                display= "flex"
                flexWrap= "wrap"
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                // bgcolor={"rgba(235, 234, 156, 0.589)"}                
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
                    // bgcolor={"rgba(235, 156, 180, 0.589)"}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    mt={2}
                    marginX={3}
                >
                    <div key='divName'>
                        <TextField
                            required
                            id="outlined-helperText"
                            name="name"
                            label="Name"
                            value={input.name}
                            onChange={(e) => handleChange(e)}
                            variant="filled"
                            className={classes.formControl}
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
                            id="outlined-helperText"
                            name="brand"
                            label="Brand"
                            value={input.brand}
                            onChange={(e) => handleChange(e)}
                            variant="filled"
                            className={classes.formControl}
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
                            id="outlined-helperText"
                            name="stock"
                            label="Stock"
                            value={input.stock}
                            onChange={(e) => handleChange(e)}
                            variant="filled"
                            className={classes.formControl}
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
                            id="outlined-helperText"
                            name="description"
                            label="Description"
                            value={input.description}
                            onChange={(e) => handleChange(e)}
                            variant="filled"
                            className={classes.formControl}
                        />
                        {
                            errors.description && (
                                <FormHelperText>{errors.description}</FormHelperText>
                            )
                        }
                    </div>
                </Box>
                
                <Box
                    // bgcolor={"rgba(156, 177, 235, 0.589)"}
                    width='250px'
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    mt={2}
                    marginX={3}
                >
                    <Box className={classes.range} key={`divPrice`}>
                        <TextField
                            label="Price *"
                            id="filled-start-adornment"
                            name="price"
                            value={input.price}
                            onChange={(e) => handleChange(e)}
                            className={clsx(classes.margin, classes.textField)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                            variant="filled"
                        />
                        {
                            errors.price && (
                                <FormHelperText>{errors.price}</FormHelperText>
                            )
                        }
                    </Box>
                    <Box key='divPriceSign'>
                        <TextField
                            required
                            id="outlined-helperText"
                            name="price_sign"
                            label="Price Sign"
                            value={input.price_sign}
                            onChange={(e) => handleChange(e)}
                            variant="filled"
                            className={classes.formControl}
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
                            id="outlined-helperText"
                            name="currency"
                            label="Currency"
                            value={input.currency}
                            onChange={(e) => handleChange(e)}
                            variant="filled"
                            className={classes.formControl}
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
                            id="outlined-helperText"
                            name="image_link"
                            label="Image URL"
                            value={input.image_link}
                            onChange={(e) => handleChange(e)}
                            variant="filled"
                            className={classes.formControl}
                        />
                        {
                            errors.image_link && (
                                <FormHelperText>{errors.image_link}</FormHelperText>
                            )
                        }
                    </Box>
                </Box>
                <Box
                    // display="block"
                    // position="relative"
                    width='250px'
                    height='250px'
                    // bgcolor={"rgba(156, 235, 162, 0.589)"}
                    p={4}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    mt={2}
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
                    // bgcolor={"rgba(156, 230, 235, 0.589)"}
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
                            id="outlined-helperText"
                            name="product_type"
                            label="Product Type"
                            value={input.product_type}
                            onChange={(e) => handleChange(e)}
                            variant="filled"
                            className={classes.formControl}
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
                    // bgcolor={"rgba(235, 156, 156, 0.589)"}
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

                        