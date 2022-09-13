import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { getDetail, postReview, updateRating } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, FormHelperText, Grid, makeStyles, 
    TextField, Typography } from '@material-ui/core'; // Select InputLabel FormControl se saco por que no se usaba
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import defaultImage from "../../assets/images/not_found.png";
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: "150ch",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '75ch',
        },
    },
}));

export default function PostReview() {
    const { id } = useParams();
    const item = useSelector((state) => state.productDetail)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const classes = useStyles();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch])

    const [input, setInput] = useState({
        title: "",
        text: "",
        score: 0,
        product_id: id
    });

    function validation(input) {
        let errors = {};
        if (!input.title || typeof input.title !== "string") {
            errors.title = "Please insert the title of your review";
        }
        if (!input.text || typeof input.text !== "string") {
            errors.text = "Please insert the text of your review";
        }
        if (!input.score || typeof input.score !== "number") {
            errors.score = "Please insert the score of your review";
        }
        return errors;
    }

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validation({
            ...input,
            [e.target.name]: e.target.value,
        }))
    }

    const handleChangeScore = (event, newValue) => {
        setInput({
            ...input,
            score: newValue
        })
        setErrors(validation({
            ...input,
            score: newValue,
        }))
    };

    function handleSubmit(e) {
        e.preventDefault();
        if (errors.title || errors.text) {
            return alert("Can't post a Review. Missing data")
        }

        dispatch(postReview(input))
        dispatch(updateRating(id))
        alert("Review posted successfully!!");
        setInput({
            title: "",
            text: "",
            score: 0,
        })
        navigate('/')
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">

            <Box
                display='flex'
                flexWrap='wrap'
                position='relative'
                width='100%'
                py={2}
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="flex-start"
                >
                    <Box
                        display='flex'
                        flexWrap='wrap'
                        position='relative'
                        width='100%'
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
                                        onClick={(e) => handleSubmit(e)}> POST REVIEW
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>



                    <div className='detail' key={item.id}>

                        <div className='breadcrums'>
                            <Breadcrumbs aria-label="breadcrumb">
                                <h4>You are Reviewing:</h4>
                                <Typography color="textPrimary">{item.name}</Typography>
                            </Breadcrumbs>
                        </div>
                        <div className='image-list'>
                            <img src={item.image_link || defaultImage} alt="imagen detalle" className='detail-img-small' />
                        </div>
                    </div>

                    <Grid item xs={1}>
                        <div key='divName'>
                            <TextField
                                id="outlined-name"
                                label="Title"
                                name="title"
                                value={input.title}
                                onChange={(e) => handleChange(e)}
                                variant="outlined"
                            />
                            {
                                errors.title && (
                                    <FormHelperText>{errors.title}</FormHelperText>
                                )
                            }
                        </div>

                        <div key='divDesc'>
                            <TextField
                                id="outlined-name"
                                label="Text"
                                name="text"
                                value={input.text}
                                onChange={(e) => handleChange(e)}
                                variant="outlined"
                            />
                            {
                                errors.text && (
                                    <FormHelperText>{errors.text}</FormHelperText>
                                )
                            }
                        </div>

                    </Grid>

                    <Grid item xs={4}>

                        <div className='range' key={`divRating`}>

                            <div>
                                <Box component="fieldset" mb={3} borderColor="transparent">
                                    <Typography component="legend">Score</Typography>
                                    <Rating
                                        name="simple-controlled"
                                        value={input.score}
                                        onChange={handleChangeScore}

                                    />
                                </Box>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </form>

    )
}
