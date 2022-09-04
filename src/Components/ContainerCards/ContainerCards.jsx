import React, { useState } from "react";
// import {Container} from '@material-ui/core';
// import LandingPage from "../Landing/Landing";
import Home from '../../Components/Home/Home';
import Filter from "../Filter/Filter";


export default function ContainerCards() {
    
    const [order, setOrder] = useState("")
       
    return(
        <div>
            <Filter 
                setOrder={setOrder}    
            />
            <Home order={order}/>
        </div>
    )
};

