import React from 'react';
import { Form } from 'react-bootstrap';

const Buscador = ({ filtro, onFiltroChange }) => {
    return (
        <Form.Group controlId="filtro">
            <Form.Control
                type="text"
                placeholder="Buscar colaborador..."
                value={filtro}
                onChange={e => onFiltroChange(e.target.value)}
            />
        </Form.Group>
    );
};

export default Buscador;