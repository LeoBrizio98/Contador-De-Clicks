import './App.css';
import kChingLogo from './imagenes/LogoBlanco.png';
import Boton from './components/boton.js';
import Contador from './components/contador.js';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const drivesClick = () => {
    setNumClicks(numClicks + 1);
  };

  const resetCounter = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
        className='kching-logo'
        src={kChingLogo}
        alt='Logo de K-Ching' />
      </div>
      <div className='container-main'>
        <Contador
        numClicks={numClicks} />
        <Boton
          text='Click'
          isClickButton={true}
          driveClick={drivesClick} />
        <Boton
          text='Reiniciar'
          isClickButton={false}
          driveClick={resetCounter} />
      </div>
    </div>
  );
}

export default App;
