import React from 'react';
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

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "auto",
    flexGrow: 1,
    margin: 'auto',
    height: 'auto'
  },
  button2: {
    marginLeft: 20,
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
    marginTop: 100
  }
}));


const itemData = [
  {
      img: "https://i.im.ge/2022/09/06/ORH3Vp.random.jpg",
      title: "Entregamos a todo el pais,..."
  },
  {
      img: "https://i.im.ge/2022/09/06/ORHc51.makeup.jpg",
      title: "...inspiramos confianza a nuestros clientes,..."
  },
  {
      img: "https://i.im.ge/2022/09/06/ORpP9G.labial.jpg",
      title: "...trabajamos en equipo..."
  },
  {
      img: "https://i.im.ge/2022/09/06/ORHZEW.unas.jpg",
      title: "...para que todo salga como lo esperas."
  },
  {
    img: "https://i.im.ge/2022/09/06/ORHBIy.perfums.jpg",
    title: "...para que todo salga como lo esperas."
},
  // {
  //     img: "https://img.freepik.com/foto-gratis/vista-trasera-hombre-negocios-hablar-telefono-ciudad_53876-129657.jpg?size=626&ext=jpg&uid=R21970068&ga=GA1.2.1703121374.1661973682",
  //     title: "La logística de TuSpacio, para tu tranquilidad."
  // },
  // {
  //     img: "https://img.freepik.com/foto-gratis/estilo-vida-concepto-negocio-retrato-apuesto-hombre-negocios-que-disfruta-hablando-telefono-movil-espacio-copia-fondo-blanco-aislado_1258-103963.jpg?size=626&ext=jpg&uid=R21970068&ga=GA1.2.1703121374.1661973682",
  //     title: "Verte y Sentirte bien, van de la mano."
  // },
]


export default function Containe() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = itemData.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

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
            <div> <img src={brands} alt="" className={classes.brands}/> </div>
    </div>

    
  );
}
