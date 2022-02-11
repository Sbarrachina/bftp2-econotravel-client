import React from 'react';
import {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
                        <Carousel>
                            <div>
                                <img src="assets/bici.png" />
                                <p className="legend">Legend 1</p>
                            </div>
                            <div>
                                <img src="assets/barco.png" />
                                <p className="legend">Legend 2</p>
                            </div>
                            <div>
                                <img src="assets/bcnmodernista.png" />
                                <p className="legend">Legend 3</p>
                            </div>

                            <div>
                                <img src="assets/huerta.png" />
                                <p className="legend">Legend 3</p>
                            </div>
                            <div>
                                <img src="assets/montserrat.png" />
                                <p className="legend">Legend 3</p>
                            </div>
                        </Carousel>



                    </div>
                </div>
            </div>
        </div>

    );
};


export default Catalogo;

