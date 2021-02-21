import React from 'react';

const Form = () => {
    return ( 
        <>
        <h2>Pedir Cita</h2>

        <form>
            <label>Nombre de tú Mascota</label>
            <input
                type='text'
                name='mascota'
                className='u-full-width'
                placeholder='Nombre Mascota'
            /> 

            <label>Nombre del Dueño</label>
            <input
                type='text'
                name='propietario'
                className='u-full-width'
                placeholder='Nombre del Dueño'
            />  

            <label>Fecha</label>
            <input
                type='date'
                name='fecha'
                className='u-full-width'
            />

            <label>Hora</label>
            <input
                type='time'
                name='hora'
                className='u-full-width'
            />
            
            <label>Síntomas</label>
            <textarea
                className='u-full-width'
                name='síntomas'
            ></textarea>

            <button
                type='submit'
                className='u-full-width button'
            >Agregar Cita</button>          
        </form>
        </>
     );
}
 
export default Form;