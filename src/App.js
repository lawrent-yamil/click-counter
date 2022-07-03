import React from 'react';
import './App.css';
import freeCodeCampLogo from './assets/freecodecamp-logo.png';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';


const App = () => {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => setNumClicks(numClicks + 1);

  const reiniciarContador = () => setNumClicks(0);

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de FreeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks} />
        <Boton 
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick}
        />
        <Boton 
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
