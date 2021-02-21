import React, { useState } from "react";

const Form = () => {

    //Creamos el state de citas
    const [cita, setActualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    //Function to upgrade the input, and We use array destructuring
    const handleChange = e => {
        setActualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    };

    //Extract the values
    const { mascota, propietario, fecha, hora, sintomas } = cita;
    
    //Sending data
    const handleSubmit = e => {
        e.preventDefault();
        
        //Validating the appointment. NOTE: Trim removes blanks
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            console.log('ERR')
            return;
        }
        console.log('adding...')
        //Assign an id

        //Create appointment in main state

        //Reset form
    }

    return ( 
        <>
        <h2>Pedir Cita</h2>

        <form onSubmit={handleSubmit}>
            <label>Nombre de tu mascota</label>
            <input
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre mascota"
                onChange={handleChange}
                value={mascota}
            /> 

            <label>Nombre del dueño</label>
            <input
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Nombre del dueño"
                onChange={handleChange}
                value={propietario}

            />  

            <label>Fecha</label>
            <input
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={handleChange}
                value={fecha}
            />

            <label>Hora</label>
            <input
                type="time"
                name="hora"
                className="u-full-width"
                onChange={handleChange}
                value={hora}
            />
            
            <label>Síntomas</label>
            <textarea
                className="u-full-width"
                name="sintomas"
                onChange={handleChange}
                value={sintomas}
            ></textarea>

            <button
                type="submit"
                className="u-full-width button"
            >Agregar Cita</button>          
        </form>
        </>
     );
}
 
export default Form;