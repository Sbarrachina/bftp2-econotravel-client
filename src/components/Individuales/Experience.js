import React from 'react';
import styles from './experiencias.module.css'
import {useLocation} from "react-router-dom";


const Experience = () => {

    const location = useLocation()

    const experience = location.state.experience

    return (
        <div>
            <h1>{experience.name}</h1>
            <p>{experience.description}</p>

        </div>
    );
};

export default Experience;
