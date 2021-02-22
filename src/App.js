import React, { useState } from 'react';
import Form from './components/Form.jsx';


function App() {
//Array of appointments
  const [citas, setCitas] = useState([]);

  //Function to take the current appointments and take the new ones
  const crearCita = cita => {
    setCitas([ ...citas, cita ]);
  };

  return (
  <>
    <h1>Administrador de pacientes</h1>

    <div className="container">
      <div className="row">
        <div className="one-half column">
            <Form crearCita={crearCita}/>
        </div>
        <div className="one-half column">
            2
        </div>
      </div>
    </div>
  </>
  );
}

export default App;
