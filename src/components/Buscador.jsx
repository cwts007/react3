import React, { useState } from 'react';

function Buscador({ colaboradores }) {
    const [terminoBusqueda, setTerminoBusqueda] = useState("");
    const [resultadosBusqueda, setResultadosBusqueda] = useState([]);

    const handleChange = (e) => {
        setTerminoBusqueda(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (terminoBusqueda === "") {
            setResultadosBusqueda([]);
        } else {
            setResultadosBusqueda(colaboradores.filter((colaborador) => Object.values(colaborador).join(" ").toLowerCase().includes(terminoBusqueda.toLowerCase())));
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={terminoBusqueda} onChange={handleChange} placeholder="Buscar colaborador" />
                <button type="submit">Buscar</button>
            </form>
            {resultadosBusqueda.map((colaborador) => (
                <div key={colaborador.id}>
                    <p>{colaborador.nombre}</p>
                    <p>{colaborador.correo}</p>
                    <p>{colaborador.edad}</p>
                    <p>{colaborador.cargo}</p>
                    <p>{colaborador.telefono}</p>
                </div>
            ))}
        </div>
    );
}

export default Buscador;
