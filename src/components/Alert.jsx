import React from 'react';

function Alert({ mensaje }) {
  return (
    <div className={`alert alert-${mensaje ? mensaje.type : "secondary"}`}>
      {mensaje ? mensaje.text : ""}
    </div>
  );
}

export default Alert;
