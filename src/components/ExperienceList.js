import React, {useState} from 'react'
import Experience from "./Experience";
import NewExperienceForm from "./NewExperienceForm";

function ExperienceList() {
    const [Experiences, setExperiences] =  useState([])

    const addExperience = Experience => {
        if (!Experience.text || /^\s*$/.test(Experience.text)) {
            return
        }

        const newExperiences = [Experience, ...Experiences]
        setExperiences(newExperiences)
        console.log(newExperiences);
    };
    const updateExperience = (ExperienceId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setExperiences(prev => prev.map(item => (item.id === ExperienceId ? newValue : item)))
    }
    const removeExperience = id => {
        const removeArr = [...Experiences].filter(Experience => Experience.id !== id);

        Experiences(removeArr);
    }
    return (
        <div>
            <h1>What's the plan for today</h1>
            <NewExperienceForm onSubmit={addExperience}/>
            <Experience Experiences={Experiences} removeExperience={removeExperience} updateToDo={updateExperience}/>
        </div>
    );
}
export default ExperienceList