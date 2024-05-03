import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const Formulario = ({ onAgregarColaborador }) => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [edad, setEdad] = useState('');
    const [cargo, setCargo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [alertaMensaje, setAlertaMensaje] = useState('');
    const [alertaTipo, setAlertaTipo] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const camposVacios = [];

        if (!nombre) camposVacios.push('nombre');
        if (!correo) camposVacios.push('correo');
        if (!edad) camposVacios.push('edad');
        if (!cargo) camposVacios.push('cargo');
        if (!telefono) camposVacios.push('teléfono');

        if (camposVacios.length > 0) {
            const mensajeCamposVacios = `Los siguientes campos están vacíos: ${camposVacios.join(', ')}`;
            setAlertaMensaje(mensajeCamposVacios);
            setAlertaTipo('danger');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(correo)) {
            setAlertaMensaje('El correo electrónico no es válido');
            setAlertaTipo('danger');
            return;
        }

        if (!/^\+569\d{8}$/.test(telefono)) {
            setAlertaMensaje('El número de teléfono no es válido. Debe tener el formato +569xxxxxxxx');
            setAlertaTipo('danger');
            return;
        }

        const nuevoColaborador = {
            id: Date.now().toString(),
            nombre,
            correo,
            edad,
            cargo,
            telefono,
        };
        onAgregarColaborador(nuevoColaborador);
        setNombre('');
        setCorreo('');
        setEdad('');
        setCargo('');
        setTelefono('');
        setAlertaMensaje('Colaborador agregado exitosamente');
        setAlertaTipo('success');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese el nombre del colaborador"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="correo">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Ingrese el correo electrónico"
                    value={correo}
                    onChange={e => setCorreo(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="edad">
                <Form.Label>Edad</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Ingrese la edad"
                    value={edad}
                    onChange={e => setEdad(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="cargo">
                <Form.Label>Cargo</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese el cargo del colaborador"
                    value={cargo}
                    onChange={e => setCargo(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="telefono">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese el número de teléfono (+569xxxxxxxx)"
                    value={telefono}
                    onChange={e => setTelefono(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Agregar Colaborador
            </Button>
            {alertaMensaje && <Alert variant={alertaTipo} className="mt-3">{alertaMensaje}</Alert>}
        </Form>
    );
};

export default Formulario;