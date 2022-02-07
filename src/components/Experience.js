import React, { useState } from 'react';
import ExperienceForm from "./ExperienceForm";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Experience({Experience, removeExperience, updateExperience}) {
    const [edit, setEdit] = useState ({
        id: null,
        value: ""
    })

    const submitUpdate = value => {
        updateExperience(edit.id, value);
        setEdit({
            id: null,
            value: ''
        })
    }
    if (edit.id) {
        return <ExperienceForm edit={edit} onSubmit={submitUpdate} />;
    }


    return Experience.map((Experience, index) => (
        <div className='experience-row complete' key={index}>

            <div key={Experience.id}>
                {Experience.text}
            </div>


            <div className='icons'>
                <RiCloseCircleLine onClick={() => removeExperience(Experience.id)}
                                   className='delete-icon'/>
                <TiEdit onClick={() => setEdit({ id: Experience.id, value: Experience.text })}/>
            </div>
        </div>
    ));
}
export default  Experience