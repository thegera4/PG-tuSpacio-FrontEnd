import React from 'react'
import WishlistCards from '../../Components/WishlistCards/WishlistCards';
import { useSelector } from 'react-redux'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  centering: {
   
  }
}));

function Wishlist() {
  const classes = useStyles();
  //const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites)

  return (
    <div>
     <Box 
        textAlign="left" 
        marginLeft="60px" 
        marginBottom="20px" 
        fontWeight="fontWeightBold" 
        fontSize={20}>
          Wishlist 
      </Box>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid 
            container justifyContent="center" 
            spacing={2}>
              {favorites.map((product, index) => {
                return(
                  <WishlistCards 
                    key={index} 
                    props={product} />
                )
              })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Wishlist