import React from 'react';
import { Table, Button } from 'react-bootstrap';

const Listado = ({ colaboradores, onEliminarColaborador }) => {
    return (
        <div className="table-responsive">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th className="d-none d-md-table-cell">Correo</th>
                        <th className="d-none d-md-table-cell">Edad</th>
                        <th className="d-none d-md-table-cell">Cargo</th>
                        <th className="d-none d-md-table-cell">Teléfono</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {colaboradores.map(colaborador => (
                        <tr key={colaborador.id}>
                            <td>{colaborador.nombre}</td>
                            <td className="d-none d-md-table-cell">{colaborador.correo}</td>
                            <td className="d-none d-md-table-cell">{colaborador.edad}</td>
                            <td className="d-none d-md-table-cell">{colaborador.cargo}</td>
                            <td className="d-none d-md-table-cell">{colaborador.telefono}</td>
                            <td>
                                <Button
                                    variant="danger"
                                    onClick={() => onEliminarColaborador(colaborador.id)}
                                >
                                    Eliminar
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Listado;