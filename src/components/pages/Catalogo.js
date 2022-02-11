import React from 'react';
import {useEffect, useState} from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "bootstrap/dist/css/bootstrap.min.css";

<<<<<<< HEAD
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

=======
>>>>>>> 20dcd2602089e77328f4b448e8bab2556a2013cd
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
<<<<<<< HEAD
                        <Carousel>
                            <div>
                                <img src="assets/bici.png" />
                                <p className="legend">Paseo en bicicleta por el Montseny</p>
                            </div>
                            <div>
                                <img src="assets/barco.png" />
                                <p className="legend">Descubre las costa en barco de vela</p>
                            </div>
                            <div>
                                <img src="assets/bcnmodernista.png" />
                                <p className="legend">Descubre la Barcelona Modernista de noche</p>
                            </div>

                            <div>
                                <img src="assets/huerta.png" />
                                <p className="legend">Del huerto a la mesa</p>
                            </div>
                            <div>
                                <img src="assets/montserrat.png" />
                                <p className="legend">Arte en la montaña sagrada</p>
                            </div>
                        </Carousel>

=======

                        {experiences.map((e,index) => <div className="experience">
                            <img className="experience-image" key={index[0]} src={e.image} alt="experience - image"/>

                        {experiences.map(e => <div className="experience">
                            <img className="experience-image"  src={e.image} alt="experience - image"/>


                            <p>{e.name}</p>
                        </div> )}
>>>>>>> 20dcd2602089e77328f4b448e8bab2556a2013cd
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
