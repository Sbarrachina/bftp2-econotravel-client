import React from 'react';
import styles from './AboutUs.module.css'


const AboutUs = () => {
    return (
        <div className={styles.AboutUs}>
            <h1>Econotravel: Experiencias en el área de Barcelona</h1>
            <h2> Quiénes somos</h2>
            <h2>Misión</h2>
            <p>Nuestra empresa se fundó a raíz de un viaje que nuestra fundadora, Marina Herrán, realizó en bicicleta por Cataluña en el verano de 2001.<br></br>
                Durante ese periodo, descubrió que las opciones turísticas que ofrecían ciudades como Barcelona, Girona y Reus dependían de transportes <br></br>
                contaminantes y actividades poco respetuosas con la naturaleza y el entorno, algo que causaba un progresivo deterioro de los increíbles<br></br>parajes naturales de Cataluña.<br></br>
                <br></br>
                Preocupada por la falta de alternativas eco-friendly, Marina se propuso fundar una agencia de experiencias turísticas donde el respeto por la<br></br>
                naturaleza fuera la principal prioridad. Así nació Econotravel Barcelona.
            </p>
            <h2> Contacto</h2>
            <p>Teléfono: 93 123 45 67<br></br>
                Correo: info@econotravel.com<br></br>
                Dirección: Carrer dels Viatgers, 28, 08001 Barcelona
            </p>
            <img src="assets/MarinaFoto.png"/>
        </div>


    );
};

export default AboutUs;
