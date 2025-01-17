import React from 'react';
import {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

import {Link, Redirect,} from 'react-router-dom';


const Home = ({experiences}) => {


    return (
        <div>
            <div className="catalog-frame">
                <div className="catalog-gallery">
                    <h3>Las mejores actividades que hacer</h3>
                    <div className="experience-list">
                        <Carousel>

                            {experiences.map(experience =>
                                <div>
                                    <img src={experience.image} alt={experience.name}/>

                                    <p className="legend"> {experience.name}
                                        <Link to={{
                                            pathname: `/experience/${experience.id}`,
                                            state: { experience: experience }
                                        }}>More info</Link>
                                    </p>

                                </div>)}

                        </Carousel>

                    </div>
                </div>
            </div>
            <div className="Container_video">
                <iframe width="740" height="480" src="https://www.youtube.com/embed/pdkQRgWSWcM" controls ="0"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
        </div>


    );
};


export default Home;

