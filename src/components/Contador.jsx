import React from "react";
import '../styles/Contador.css';

const Contador = ({ numClicks}) => {
  return (
    <div className="contador">
      {numClicks}
    </div>
  );
}

export default Contador;