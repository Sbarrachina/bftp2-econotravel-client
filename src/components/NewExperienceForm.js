import React, {Fragment, useState, useEffect} from 'react';

const NewExperienceForm = (props) => {

    const [datos, setDatos] = useState({
        name: '',
        price:'',
        duration:'',
        accessibility:'',
        description: '',
        label:''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    const enviarDatos = (event) => {
        event.preventDefault()
        props.onSubmit(datos)
        console.log(datos.name + ' ' + datos.price + ' ' + datos.duration + ' ' + datos.accessibility + ' ' + datos.description +' ' + datos.label + ' ')
    }


    return (
        <Fragment>
            <h1>Añadir Nueva Experiencia</h1>
            <form  onSubmit={enviarDatos}>

                <div>
                    <input type="text"
                           placeholder="Título"
                           onChange={handleInputChange}
                           name="name"/>
                </div>


                <div>
                    <input type="text"
                           placeholder="Precio"
                           onChange={handleInputChange}

                           name="price"/>
                </div>

                <div>
                    <input type="text"
                           placeholder="Duración"
                           onChange={handleInputChange}
                           name="duration"/>
                </div>

                <div>
                    <input type="text"
                           placeholder="Accesibilidad"
                           onChange={handleInputChange}
                           name="accessibility"/>
                </div>

                <div>
                    <input type="text"
                           placeholder="Descripción"
                           onChange={handleInputChange}
                           name="description"/>
                </div>

                <div>
                    <input type="text"
                           placeholder="Etiquetas"
                           onChange={handleInputChange}
                           name="tags"/>
                </div>


                <div>
                    <input type="submit"  value="Guardar"/>
                </div>
            </form>
        </Fragment>
    );
}
export default  NewExperienceForm
