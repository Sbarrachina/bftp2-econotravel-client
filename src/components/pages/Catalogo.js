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



const Catalogo = ({experiences}) => {


    const [newExperience, setNewExperience] = useState("");



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
                                <MDBListGroupItem> {e.description}</MDBListGroupItem>
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



