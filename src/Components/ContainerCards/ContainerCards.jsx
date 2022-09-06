import React, { useState } from "react";
// import {Container} from '@material-ui/core';
// import LandingPage from "../Landing/Landing";
import Home from '../../Components/Home/Home';
import Filter from "../Filter/Filter";
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "auto",
      flexGrow: 1,
      margin: 'auto',
      height: 'auto'
    },
  }));

export default function ContainerCards() {
    const classes = useStyles();
    const [order, setOrder] = useState("")
       
    return(
        <div className={classes.root}>
            <Filter 
                setOrder={setOrder}    
            />
            <Home order={order}/>
        </div>
    )
};

