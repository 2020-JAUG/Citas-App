import React from 'react';

const Citas = ({ newCitas, eliminarCita }) => ( 
    <div className="cita">
        <p>Mascota: <spna>{newCitas.mascota}</spna> </p>
        <p>Dueño: <spna>{newCitas.propietario}</spna> </p>
        <p>Fecha: <spna>{newCitas.fecha}</spna> </p>
        <p>Hora: <spna>{newCitas.hora}</spna> </p>
        <p>Sintomas: <spna>{newCitas.sintomas}</spna> </p>

        <button 
            className="button eliminar u-full-width"
            onClick={ () => eliminarCita(newCitas.id) }
        >Eliminar &times;</button>
    </div>
 );
 
export default Citas;