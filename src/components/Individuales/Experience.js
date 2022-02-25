import React from 'react';
import styles from './experiencias.module.css'
import {useLocation} from "react-router-dom";
import {MDBCardImage, MDBListGroupItem} from "mdb-react-ui-kit";


const Experience = () => {

    const location = useLocation()

    const experience = location.state.experience

    return (
        <div className={styles.conteiner}>
            <h1>{experience.name}</h1>

            <div className={styles.foto}>



                </div>
            <div className={styles.texto}>
            <p> {experience.description}</p>
            <p> {experience.price} € </p>
            <p> {experience.duration} Horas</p>
            <p> {experience.accessibility}</p>
            </div>

            <div className= {styles.Container_video}>

                <iframe width="720" height="480" src="https://www.youtube.com/embed/pdkQRgWSWcM" controls ="0"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
        </div> ) ;


};

export default Experience;
