import React, { useState } from 'react';
import Form from './components/Form.jsx';
import Citas from './components/Citas.jsx';


function App() {
  //Array of appointments
  const [citas, setCitas] = useState([]);

  //Function to take the current appointments and take the new ones
  const crearCita = cita => { setCitas ([ ...citas, cita ])};

  //Function remove appoinment by you id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id );
    setCitas(nuevasCitas);
  };

  //Conditional message
  const titulo = citas.length === 0 ? 'Sin citas' : 'Citas';

  return (
  <>
    <h1>Administrador de pacientes</h1>

    <div className="container">
      <div className="row">
        <div className="one-half column"> 
          <Form crearCita={crearCita}/>
        </div>

        <div className="one-half column">
          <h2>{titulo}</h2>
              {citas.map(cita => (
                <Citas 
                  newCitas={cita} 
                  key={cita.id}
                  eliminarCita={eliminarCita}
                  />
            ))}
        </div>
      </div>
    </div>
  </>
  );
};

export default App;
