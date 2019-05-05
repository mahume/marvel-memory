import React from 'react';
import './style.css';

function AvengersTitle({ image, name }) {  
  return (
    <img 
      id="avengers-title" 
      src={image.image} 
      alt={image.name}
    ></img>
  );
}

export default AvengersTitle;