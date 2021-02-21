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
                    placeholder='nombre mascota'
                />
        </form>
        </>
     );
}
 
export default Form;