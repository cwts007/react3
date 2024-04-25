import React, { useState } from 'react';

function Formulario({ setColaboradores, setMensaje }) {
    const [nuevoColaborador, setNuevoColaborador] = useState({
        id: "",
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: ""
    });

    const handleChange = (e) => {
        setNuevoColaborador({ ...nuevoColaborador, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(nuevoColaborador).some((value) => value === "")) {
            setMensaje({ text: "Todos los campos son obligatorios", type: "danger" });
        } else {
            setColaboradores((prevColaboradores) => [...prevColaboradores, nuevoColaborador]);
            setMensaje({ text: "Colaborador agregado exitosamente", type: "success" });
            setNuevoColaborador({
                id: "",
                nombre: "",
                correo: "",
                edad: "",
                cargo: "",
                telefono: ""
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>

            <input type="text" name="id" value={nuevoColaborador.id} onChange={handleChange} placeholder="ID" />
            <input type="text" name="nombre" value={nuevoColaborador.nombre} onChange={handleChange} placeholder="Nombre" />
            <input type="text" name="correo" value={nuevoColaborador.correo} onChange={handleChange} placeholder="Correo" />
            <input type="text" name="edad" value={nuevoColaborador.edad} onChange={handleChange} placeholder="Edad" />
            <input type="text" name="cargo" value={nuevoColaborador.cargo} onChange={handleChange} placeholder="Cargo" />
            <input type="text" name="telefono" value={nuevoColaborador.telefono} onChange={handleChange} placeholder="Teléfono" />
            <button type="submit">Agregar colaborador</button>
        </form>
    );
}

export default Formulario;
