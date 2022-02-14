import React from 'react';
import {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import  {useHistory} from "react-router-dom";
import Catalogo from "./Catalogo";

function Home(){
    const history = useHistory();
    const handleClick = () =>history.push() {
        return(
            <>
                <h1>Paseo en Bicicleta por el Montseny</h1>
                <Catalogo/>
</>

        );

    }

