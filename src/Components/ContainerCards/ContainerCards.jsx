import React, { useState } from "react";
// import {Container} from '@material-ui/core';
// import LandingPage from "../Landing/Landing";
import Home from '../../Components/Home/Home';
import Filter from "../Filter/Filter";
import PersistentDrawerLeft from '../Drawer/Drawer'

export default function ContainerCards() {
    
    const [order, setOrder] = useState("")
       
    return(
        <>
            {/*<PersistentDrawerLeft />*/}
            <Filter 
                setOrder={setOrder} 
            />
            <Home order={order}/>
        </>
    )
};

