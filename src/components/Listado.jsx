import React from 'react';

function Listado({ colaboradores, setColaboradores }) {
    const eliminarColaborador = (id) => {
        setColaboradores(colaboradores.filter((colaborador) => colaborador.id !== id));
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                    <th>Teléfono</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {colaboradores.map((colaborador) => (
                    <tr key={colaborador.id}>
                        <td>{colaborador.id}</td>
                        <td>{colaborador.nombre}</td>
                        <td>{colaborador.correo}</td>
                        <td>{colaborador.edad}</td>
                        <td>{colaborador.cargo}</td>
                        <td>{colaborador.telefono}</td>
                        <td>
                            <button onClick={() => eliminarColaborador(colaborador.id)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Listado;
