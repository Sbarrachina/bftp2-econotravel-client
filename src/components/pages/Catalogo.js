import React from 'react';
import {useEffect, useState} from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "bootstrap/dist/css/bootstrap.min.css";

const Catalogo = () => {

    const [experiences, setExperiences] = useState([]);
    const [newExperience, setNewExperience] = useState("");
    const [requiresUpdate, setRequiresUpdate] = useState(true);

    useEffect(() => {
        if (requiresUpdate) {
            fetch("http://localhost:8080/api/experiences")
                .then(r => r.json())
                .then(setExperiences)
                .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])

    const addExperience = (experienceName) => {
        fetch("http://localhost:8080/api/experiences",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({name: experienceName})
            }
        ).then(_ => setRequiresUpdate(true))

    }
    return (

        <div>

           <div className="catalog-frame">
                <div className="catalog-gallery">
                    <p>Las mejores actividades que hacer</p>
                    <div className="experience-list">

                        {experiences.map((e,index) => <div className="experience">
                            <img className="experience-image" key={index[0]} src={e.image} alt="experience - image"/>

                        {experiences.map(e => <div className="experience">
                            <img className="experience-image"  src={e.image} alt="experience - image"/>


                            <p>{e.name}</p>
                        </div> )}
                    </div>
                </div>
           </div>


            {/* <Carousel autoPlay>
        <div>
            {experiences.map((e,index) => <div className="experience">
                <img className="experience-image" key={index} src={e.image} alt="experience - image"/>
                <p>{e.name}</p>
            </div> )}
        </div>
        <div>
            {experiences.map((e,index) => <div className="experience">
                <img className="experience-image" key={index} src={e.image} alt="experience - image"/>
                <p>{e.name}</p>
            </div> )}
        </div>

    </Carousel> */}
            </div>
);
    };


export default Catalogo;
