import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import {Paper, Box} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1200,
    flexGrow: 1,
    margin: 30,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 30,
    textPrimary:'#ffffff',
    paddingLeft: theme.spacing(5),
    backgroundColor: '#57a485',
  }, 
  colors:{
    backgroundColor: '#57a485',
    textPrimary:'#ffffff',
  },
  img: {
    display: 'flex',
    alignItems: 'center',
    height: 400,
    maxWidth: 1200,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
  buttons: {
    colorText: '#57a485',
  },
}));


const itemData = [
  {
      img: "https://img.freepik.com/vector-gratis/banner-entrega-linea-laptop-realista-paquetes-nubes-e-iconos-sociales-estilo-realista_548887-53.jpg?w=996&t=st=1661973848~exp=1661974448~hmac=d3c5aa661e7036d7b70f489d68f4de08c9182be3aea8a39d2ac68e57c5fd5346",
      title: "Entregamos a todo el pais,"
  },
  {
      img: "https://img.freepik.com/foto-gratis/chica-descalza-inspirada-gafas-pie-sobre-pierna-estudio-foto-interior-mujer-joven-entusiasta-camisa-cuadros-posando-sobre-fondo-burdeos_197531-25186.jpg?size=626&ext=jpg&uid=R21970068&ga=GA1.2.1703121374.1661973682",
      title: "inspiramos Confianza a nuestros clientes"
  },
  {
      img: "https://img.freepik.com/foto-gratis/grupo-manos-diversas-multietnicas-levantadas_53876-64967.jpg?size=626&ext=jpg&uid=R21970068&ga=GA1.2.1703121374.1661973682",
      title: "trabajamos en equipo"
  },
  {
      img: "https://img.freepik.com/foto-gratis/personas-que-trabajan-juntas-proyecto-empresarial_23-2148746319.jpg?w=996&t=st=1661974560~exp=1661975160~hmac=83412d86649f33eb6eb9e6efa53f876d75fb93918c33888cb9ee61a303dcbfdf",
      title: "para que todo salga como lo esperas..."
  },
  {
      img: "https://img.freepik.com/foto-gratis/vista-trasera-hombre-negocios-hablar-telefono-ciudad_53876-129657.jpg?size=626&ext=jpg&uid=R21970068&ga=GA1.2.1703121374.1661973682",
      title: "La logística de TuSpacio, para tu tranquilidad."
  },
  {
      img: "https://img.freepik.com/foto-gratis/estilo-vida-concepto-negocio-retrato-apuesto-hombre-negocios-que-disfruta-hablando-telefono-movil-espacio-copia-fondo-blanco-aislado_1258-103963.jpg?size=626&ext=jpg&uid=R21970068&ga=GA1.2.1703121374.1661973682",
      title: "Verte y Sentirte bien, van de la mano."
  },
]


export default function LandingPage() {
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

      <Paper square elevation={0} className={classes.header}>
        <Typography variant='subtitle1'>{itemData[activeStep].title}</Typography>
      </Paper>

      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        animateHeight='true'
        // containerStyle={}
      >
       
        {itemData.map((step, index) => (
          <div key={step.title}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.img} alt={step.title} />
            ) : null}
          </div>
        ))}
        
      </AutoPlaySwipeableViews>

      <MobileStepper
        className={classes.colors}
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Typography variant='subtitle1'color='textPrimary'>
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
          </Typography>
        }
      />
    </div>
  );
}