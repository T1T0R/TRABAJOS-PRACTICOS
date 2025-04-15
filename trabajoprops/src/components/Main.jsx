import React from 'react';

const Main = ({ name, PersonaObject, PersonasArray }) => {
  return (
    <div>
      <h2>Nombre desde App: {name}</h2>
      <h3>PersonaObject:</h3>
      <p>Nombre: {PersonaObject.nombre}</p>
      <p>Edad: {PersonaObject.edad}</p>
      <p>Estudios: {PersonaObject.estudios}</p>
      <p>¿Presente?: {PersonaObject.presente ? "Sí" : "No"}</p>

      <h3>PersonasArray:</h3>
      <ul>
        {PersonasArray.map((persona, index) => (
          <li key={index}>
            {persona.nombre} - {persona.edad} años
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
