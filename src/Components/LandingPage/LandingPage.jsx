import React, {useEffect, useState} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import {Paper} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import brands from '../../assets/images/brands.jpg'
import LogoIMG from '../../assets/images/img_logo.png';
import { useDispatch, useSelector } from 'react-redux'
import { Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import LandingCards from './LandingCards';
import { getAllProducts } from "../../actions";
import ButtonBase from '@material-ui/core/ButtonBase';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';





const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "auto",
    flexGrow: 1,
    margin: 'auto',
    height: 'auto',
    
  },
  button2: {
    backgroundColor: '#257558',
    color: '#fff',
    width: 150,
},
button3: {
  backgroundColor: '#257558',
  color: '#fff',
  width: 250,
},
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 45,
    textPrimary:'#ffffff',
    paddingLeft: theme.spacing(5),
    backgroundColor: 'transparent',
  }, 
  colors:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    textPrimary:'#ffffff',
  },
  img: {

    overflow: 'hidden',
    // display: 'block',
    width: '100%',
  },
  buttons: {
    colorText: '#57a485', 
  },
  title: {
    width: '80%',
    marginLeft: 20,
    
  },
  title1: {
    display:'flex',
    alignItems: 'center'
  },
  h1: {
    marginLeft: 15,
    marginRight: 5
    
  },
  h2: {
    marginBottom: 30,
    marginTop: 0
    
  },
  iso: {
    color: "#363636"
    
  },
  welcome: {
    fontSize:50
    
  },
  brands: {
    marginTop: 200,
    marginBottom: 200
  },
  paper: {
    height: 140,
    width: 100,
  },

  descripContain: {
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'start',
   marginTop: 100,
   marginLeft: 20
  },
  descripContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
   },
  h3: {
    marginLeft: 20,
    marginTop: 100
  },
  rootImg: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    
  },
  image: {
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 2,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  all: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  rootImg2: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    marginTop: 100
  },
  image2: {
    position: 'relative',
    height: 1000,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked2': {
        opacity: 0,
      },
    },
  },
  focusVisible2: {},
  imageButton2: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc2: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 2,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop2: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle2: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked2: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  tit: {
    color: '#fff',
    fontSize: '4rem',
    paddingTop: 200
  },
  colortext: {
    color:  "#257558",
  },
  down: {
    color: "#257558",
    fontSize: '4rem',
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },

}));


const itemData = [
  {
      img: "https://i.im.ge/2022/09/12/OGJBI1.envios2.jpg",
      title: "Entregamos a todo el pais,..."
  },
  {
    img: "https://i.im.ge/2022/09/12/1MIaNh.10.jpg",
    title: "Entregamos a todo el pais,..."
},
  {
      img: "https://i.im.ge/2022/09/12/OGnQdr.hogar.jpg",
      title: "...inspiramos confianza a nuestros clientes,..."
  },
  {
    img: "https://i.im.ge/2022/09/12/1MI0Iq.SALE.jpg",
    title: "...inspiramos confianza a nuestros clientes,..."
},


]

const images = [
  {
    url: "https://i.im.ge/2022/09/10/OJ6erM.makeup.jpg",
    title: 'MakeUp',
    width: '40%',
  },
  {
    url: 'https://i.im.ge/2022/09/10/OJNlEq.lab.jpg',
    title: 'Lipstick',
    width: '30%',
  },
  {
    url: 'https://i.im.ge/2022/09/10/OJNyd9.smal.jpg',
    title: 'Nail polish',
    width: '30%',
  },
  {
    url: "https://i.im.ge/2022/09/12/1MLbYC.pexels-suzy-hazelwood-1327689.jpg",
    title: 'Palette',
    width: '30%',
  },
  {
    url: 'https://i.im.ge/2022/09/10/OJcHI1.001-42.jpg',
    title: 'Contourn',
    width: '30%',
  },
  {
    url: 'https://i.im.ge/2022/09/10/OJgInh.pencil.jpg',
    title: 'Pencil',
    width: '40%',
  },
  
];


export default function Containe() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = itemData.length;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const RENDERED_PRODUCTS = products.slice(155,163);
  const [checked,setChecked] = useState(false)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
     setChecked(true)
  }, []);

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        animateHeight={true}
        // containerStyle={}
      >
       
        {
          itemData.map((step, index) => (
            <div key={step.title}>
              { Math.abs(activeStep - index) <= 2 
                  ? <img className={classes.img} src={step.img} alt={step.title} />
                  : null
              }
            </div>
          ))
        }
        
      </AutoPlaySwipeableViews>

      <MobileStepper
        className={classes.colors}
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
      /> 


 

{/* 
        <ButtonBase
          focusRipple
          className={classes.image2}
          focusVisibleClassName={classes.focusVisible2}
          style={{
            width: '100%',
          }}
        >

          <span
            className={classes.imageSrc2}
            style={{
               backgroundImage: `url(${"https://i.im.ge/2022/09/12/OGcbNf.mkk.jpg"})`,
            }}
          />
          <span className={classes.imageBackdrop2} />
          <span className={classes.imageButton2}>
            <Collapse
            in={checked}
            {...(checked ? {timeout: 1000} : {})}
            collapsedSize={50}
            >
            <div className={classes.titleCont}>
              <h1 className={classes.tit}>
                Welcome to <br/>
                Tu<span className={classes.colortext}>Spacio.</span>
              </h1>
            <IconButton >
              <ExpandMoreIcon className={classes.down}/>
            </IconButton>
            </div>
            </Collapse>

             <Link to='/home'>
            <Button
              variant="contained"
              className={classes.button2}
              startIcon={<ShoppingCartIcon />}
              size='small'
             >
             Shop Now!
            </Button>
            </Link> 
          </span>
          
        </ButtonBase> */}


{/*     
      <div className={classes.descriptionContainer}>
       <div className={classes.title}>
        <div className={classes.title1}> <h1 className={classes.welcome}>Welcome</h1> <img src={LogoIMG} alt="" width='50px' height='50px' className={classes.h1}/></div>
      <h2 className={classes.h2}>
        You are on the website where you'll find a wide range of beauty and personal care products. <br/> 
        Achieve your best you in TuSpacio.<br/>
        Because looking and feeling good belong together.
      </h2>
      </div>
      
      <Link to='/home'>
      <Button
              variant="contained"
              className={classes.button2}
              startIcon={<ShoppingCartIcon />}
              size='large'
             >
             Shop Now!
            </Button>
            </Link>
            </div>
            <div> 
          </div> */}





    <div className={classes.descripContainer}>
        <h2 >
        Featured Products
        </h2>
        </div>
     
            <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item xs={10}>
          <Box mb={4}>
            <Grid container justifyContent="center" >
              {RENDERED_PRODUCTS?.map((product, index) => (
                <Grid key={index} item>
                  <LandingCards
                    className={classes.paper}
                    products={product}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
           </Grid>
          </Grid>
            
            <div className={classes.all}>
            <Link to='/home'>
            <Button
              variant="contained"
              className={classes.button3}
              startIcon={<VisibilityIcon />}
              size='large'
             >
             see more
            </Button>
            </Link>
            </div>


        <div className={classes.descripContain}>
        <h2 > 
        Achieve your best you in TuSpacio.<br/>
        Because looking and feeling good belong together.
        </h2>
        </div>
            <div className={classes.rootImg}>
          {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="h5"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
        </div>

            <div>
              <img src={brands} alt="" className={classes.brands}/>
            </div>

        </div>

    
  );
}
