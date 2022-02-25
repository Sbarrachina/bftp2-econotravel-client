
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
            <img alt ="" src={experience.image} />


        </div> ) ;

};

export default Experience;
