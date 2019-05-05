import React from 'react';
import './style.css';

function AvengersTitle({ logo }) {  
  return (
    <img 
      id="avengers-title" 
      src={logo.image} 
      alt={logo.name}
    ></img>
  );
}

export default AvengersTitle;