import React from 'react';
import { useParams } from 'react-router-dom';

const Appartamento = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Appartamento {id}</h1>
      <p>Questa è la pagina dell'appartamento con id: {id}</p>
    </div>
  );
};

export default Appartamento;
