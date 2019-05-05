import React from 'react';
import './style.css';

function AvengersLogo({ logo }) {
  return (
    <img 
      id="avengers-logo"
      src={logo.image} 
      alt={logo.name}
    ></img>
  );
}

export default AvengersLogo;