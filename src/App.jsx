import React, { useState } from 'react';
import { BaseColaboradores } from './components/BaseColaboradores';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import Alert from './components/Alert';

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [mensaje, setMensaje] = useState(null);

  return (

    <div className="App">
      <div className='Header'>
        <h1>Lista de Colaboradores</h1>
      </div>
      <Alert mensaje={mensaje} />
      <Formulario setColaboradores={setColaboradores} setMensaje={setMensaje} />
      <Buscador colaboradores={colaboradores} />
      <Listado colaboradores={colaboradores} setColaboradores={setColaboradores} />
    </div>
  );
}

export default App;
