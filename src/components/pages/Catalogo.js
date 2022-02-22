import React from 'react';
import {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from './catalogo.module.css'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBListGroup,
    MDBListGroupItem,
    MDBRow, MDBCol, MDBCardOverlay
} from 'mdb-react-ui-kit';
import {Row} from "../Footer/FooterStyles";



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
        <div className={styles.container}>
            <div className={styles.row}>
                {experiences.map(e => (
                    <div className={styles.card}>

                        <MDBCardImage position='top' src={e.image} />
                        <MDBCardBody>

                            <MDBCardTitle>{e.name}</MDBCardTitle>

                            <MDBListGroup flush>
                                <MDBListGroupItem> <p> {e.price} € </p> </MDBListGroupItem>
                                <MDBListGroupItem> Duration {e.duration} Horas</MDBListGroupItem>
                                <MDBListGroupItem> {e.accessibility}</MDBListGroupItem>
                            </MDBListGroup>

                            <MDBBtn className={styles.btn} color='success' href='#'>Edit</MDBBtn>
                            <MDBBtn color='success' href='#'>Delete</MDBBtn>


                        </MDBCardBody>

                    </div>
                ))}
            </div>
        </div>

);

};


export default Catalogo;



