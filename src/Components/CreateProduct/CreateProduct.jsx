import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCategories } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { FormControlLabel, Radio, RadioGroup, TextField } from '@material-ui/core';

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
    
    let caracteristics = ['Price','Rating']

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
                            onChange={handleChange}
                            variant="outlined"
                            />
                        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleChange}>
                            <FormControlLabel value="ready" control={<Radio />} label="Ok" />
                            <FormControlLabel value="not ready" control={<Radio />} label={errors.name} />
                        </RadioGroup>
                        <div className='errorBox' key='errordivName'>
                            {
                                errors.name && (
                                    <p className='errors' key='errorName'>{errors.name}</p>
                                )
                            }
                        </div>
                    </div>

                    <div key='divImg'>
                        <label className='textCreate' key='textImg'>Image</label> <br />
                        <input  type="url" 
                                value={input.image}
                                name="image"
                                placeholder='Image URL...'
                                onChange={(e) => handleChange(e)} 
                                key='inputImg'/> <br />
                        <div className='errorBox' key='errordivImg'>
                            {
                                errors.image && (
                                    <span className='errors' key='errorImg'>{errors.image}</span>
                                )
                            }
                        </div>
                        <br />
                        <div className='divImg' key='divImgDemo'>
                            <img    className='imgDemo' 
                                    src={input.image?input.image:"https://img.freepik.com/foto-gratis/arreglo-vista-superior-pinceles-maquillaje-sombras-ojos_23-2148301855.jpg"} 
                                    alt="PokePic" 
                                    width="150px" 
                                    height="150px" 
                                    key='imgDemo' />
                        </div>
                    </div>
                </div>
                
                <div className='center' key='divCenter'>
                    {
                        caracteristics.map(c => 
                            <div className='range' key={`div${c}`}>
                                <br />
                                <label className='textCreate' key={`text${c}`}>{`${c}`}</label>
                                <input  className='rangeInput' 
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={parseInt(input[`${c.toLocaleLowerCase()}`])}
                                        name={`${c.toLocaleLowerCase()}`}
                                        onChange={(e) => handleChange(e)}
                                        key={`input${c}`} />
                                <br />
                                <h5 className='valueCreate' key={`value${c}`}>{input[`${c.toLocaleLowerCase()}`]}</h5>
                            </div>
                        )
                    }
                </div>
                    
                <div className='rightCreate' key='rightCreate'>
                    <label className='textCreate' key='textCreate'>Select Types</label> <br />
                    <div className='typeBox' key='typeBox'>
                        {
                                allTypes.map( type =>
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
                    <div className='errorBox' key='errorTypesBox'>
                        {
                            errors.types && (
                                <span className='errors' key='errorTypes'>{errors.types}</span>
                                )
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}