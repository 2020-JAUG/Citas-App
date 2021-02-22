import React from 'react';
import PropTypes from 'prop-types';

const Citas = ({ newCitas, eliminarCita }) => ( 
    <div className="cita">
        <p>Mascota: <span>{newCitas.mascota}</span> </p>
        <p>Dueño: <span>{newCitas.propietario}</span> </p>
        <p>Fecha: <span>{newCitas.fecha}</span> </p>
        <p>Hora: <span>{newCitas.hora}</span> </p>
        <p>Sintomas: <span>{newCitas.sintomas}</span> </p>

        <button 
            className="u-full-width button2"
            onClick={ () => eliminarCita(newCitas.id) }
        >Eliminar cita</button>
    </div>
 );
 
Citas.propTypes = {
    newCitas: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
};

export default Citas;