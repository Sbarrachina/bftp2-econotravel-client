import React, { useState } from 'react';


function ExperienceForm({props, addExperience, setNewExperience, newExperience}) {


    return (
        <form className="experience-form" >
            <div className="newExperienceForm">
                <input  type="text"/>
                <button onClick={() => addExperience(newExperience)}>Add experience</button>
            </div>


        </form>
    )
}

export default ExperienceForm
