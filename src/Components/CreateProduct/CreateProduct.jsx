import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCategories } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { FormControlLabel, FormHelperText, Radio, RadioGroup, TextField } from '@material-ui/core';

export default function CreateProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allCategories = useSelector((state) => state.categories);
    const allProducts = useSelector((state) => state.products)
    const [errors, setErrors] = useState({});
    const [cateogries, setCategories] = useState([]);

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
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validation({
            ...input,
            [e.target.name] : e.target.value,
            categories: types
        }))
        console.log(errors)
    }

    let handleCategories = (e) => {
        e.preventDefault();
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
                setTypes(categories.filter(c => c !== e.target.value))
                setErrors(validation({...input, categories: categories}))
            } 
    }
        
    function handleSubmit(e){
        e.preventDefault();
        if(error.name || error.categories || error.description || error.currency || error.image || error.price) {
            return alert("Can't create a product. Missing data")}
        input.categories = categories;
        dispatch(postNewProd(input))
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
        <div className='createPage' key='createPage'>
            <div className='title-submit' key='title-submit'>
                <Link to="/home">
                    <button key="backToHome">Home</button>
                </Link>
                <div className='pTitle' key="pTitle">
                    <img className='logo' src={pokeLogo} alt="pokeLogo" key='logo'/>
                    <h2 className='createTitle' key='createTitle'>Creator</h2>
                </div>
                <button id='submit' className='buttonCreate' type='submit' onClick={(e) => handleSubmit(e)} key='buttonCreate'>Ready!</button>
            </div>
            
                
            <form className='form' onSubmit={(e) => handleSubmit(e)} key='form'>
                    
                <div className='leftCreate' key='leftCreate'>
                    <div key='divName'>
                        <TextField
                            id="outlined-name"
                            label="Name"
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
                </div>
                        
                
                <div className='center' key='divCenter'>
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
                            getAriaValueText={valueLabelFormat}
                            onChange={(e) => handleChange(e)}
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
                            value={parseInt(input.rating)}
                            min={0}
                            step={1}
                            max={5}
                            scale={(x) => x}
                            getAriaValueText={valueLabelFormat}
                            onChange={(e) => handleChange(e)}
                            valueLabelDisplay="auto"
                            aria-labelledby="non-linear-slider"
                        />
                    </div>
                        
                </div>
                    
                <div className='rightCreate' key='rightCreate'>
                    <label className='textCreate' key='textCreate'>Select Categories</label> <br />
                    <div className='typeBox' key='typeBox'>
                        {
                                allCategories.map( type =>
                                        <input
                                            className={ types.includes(type.name)
                                                ? 'inputIn'
                                                : 'inputOut'
                                            }
                                            type="button"
                                            value={type.name}
                                            onClick={(e) => handleTypes(e)}
                                            key={`type-${type.name}`}
                                        />
                                )
                        }
                    </div>
                    {
                        errors.price && (
                            <FormHelperText>{errors.price}</FormHelperText>
                        )
                    }
                </div>
            </form>
        </div>
    )
}