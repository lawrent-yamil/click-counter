import React from 'react';
import '../styles/Boton.css';

const Boton = ({ texto, esBotonDeClick, manejarClick }) => {
  return (
    <button 
      className={ esBotonDeClick ? 'boton-click' : 'boton-reiniciar' }
      onClick={ manejarClick } 
    >
      {texto}
    </button>
  );
}

export default Boton;