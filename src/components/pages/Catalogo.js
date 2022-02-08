import React from 'react';
import {useEffect, useState} from "react";


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
        <div
            style={{
                display: 'flex',
                justifyContent: 'Right',
                alignItems: 'Right',
                height: '100vh'
            }}
        >
            <h1>Welcome to Econotravel Experiences</h1>
            <div className="newExperienceForm">
                <input onChange={e => setNewExperience(e.target.value)} type="text"/>
                <button onClick={() => addExperience(newExperience)}>Add experience</button>
            </div>

            <ul>
                {experiences.map(experience => <li>{experience.name}</li>)}
            </ul>
        </div>

    );
};


export default Catalogo;