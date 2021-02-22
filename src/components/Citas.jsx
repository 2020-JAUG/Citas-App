import React from 'react';

const Citas = ({ citas }) => ( 
    <div className="cita">
        <p>Mascota: <spna>{citas.mascota}</spna> </p>
        <p>Dueño: <spna>{citas.propietario}</spna> </p>
        <p>Fecha: <spna>{citas.fecha}</spna> </p>
        <p>Hora: <spna>{citas.hora}</spna> </p>
        <p>Sintomas: <spna>{citas.sintomas}</spna> </p>
    </div>
 );
 
export default Citas;