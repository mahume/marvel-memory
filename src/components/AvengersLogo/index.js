import React from 'react';
import './style.css';

function AvengersLogo({ image, name }) {
  return (
    <img 
      id="avengers-logo"
      src={image.image} 
      alt={image.name}
    ></img>
  );
}

export default AvengersLogo;