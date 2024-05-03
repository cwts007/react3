import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import Alert from './components/Alert';
import { BaseColaboradores } from './BaseColaboradores';

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [filtro, setFiltro] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [tipoAlerta, setTipoAlerta] = useState('');

  const handleAgregarColaborador = colaborador => {
    if (colaborador.nombre && colaborador.correo && colaborador.edad && colaborador.cargo && colaborador.telefono) {
      setColaboradores([...colaboradores, colaborador]);
      setMensaje('Colaborador agregado exitosamente');
      setTipoAlerta('success');
    } else {
      setMensaje('Todos los campos son obligatorios');
      setTipoAlerta('danger');
    }
  };

  const handleEliminarColaborador = id => {
    const nuevosColaboradores = colaboradores.filter(colaborador => colaborador.id !== id);
    setColaboradores(nuevosColaboradores);
  };

  const handleFiltroChange = valor => {
    setFiltro(valor);
  };

  const colaboradoresFiltrados = colaboradores.filter(colaborador =>
    Object.values(colaborador).some(valor =>
      valor.toString().toLowerCase().includes(filtro.toLowerCase())
    )
  );

  return (
    <Container>
      <h1 className="mt-4">Lista de Colaboradores</h1>
      <Row>
        <Col>
          <Buscador filtro={filtro} onFiltroChange={handleFiltroChange} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Listado colaboradores={colaboradoresFiltrados} onEliminarColaborador={handleEliminarColaborador} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Formulario onAgregarColaborador={handleAgregarColaborador} mensaje={mensaje} />
        </Col>
      </Row>
      {mensaje && (
        <Row>
          <Col>
            <Alert mensaje={mensaje} tipo={tipoAlerta} />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default App;