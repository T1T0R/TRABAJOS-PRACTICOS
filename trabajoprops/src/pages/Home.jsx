import React from 'react';
import Main from '../components/Main';

const Home = ({ name, PersonaObject, PersonasArray }) => {
  return (
    <div>
      <Main name={name} PersonaObject={PersonaObject} PersonasArray={PersonasArray} />
    </div>
  );
};

export default Home;
