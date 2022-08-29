import React from 'react'
import {Box} from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const Detail = () => {
     const classes = useStyles();
  return (
    <div>

    <Box
    component="img"
    sx={{
      height: 233,
      width: 350,
      maxHeight: { xs: 233, md: 167 },
      maxWidth: { xs: 350, md: 250 },
    }}
    alt="The house from the offer."
    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
  />
    <Typography paragraph>Bear Balsam</Typography>
    <Typography paragraph>250</Typography>
    <Typography paragraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate reiciendis repellat quibusdam, culpa vel consectetur, magni sapiente error molestias numquam totam distinctio cum, rerum possimus ad harum assumenda tempora.</Typography>
    <Typography paragraph>Options</Typography>
    <Typography paragraph>Quantity</Typography>
    <div className={classes.root}> 
    <Button variant="contained">Add to Cart</Button>
    <Button variant="outlined">Add to favorites</Button>
    </div>
    </div>

  )
}

export default Detail