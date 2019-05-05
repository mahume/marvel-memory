import React from 'react';
import './style.css';

function AvengersCard({ image, name }) {
  return (
    <img
      className="character"
      src={image}
      alt={name}
    >
    </img>
  );
}

export default AvengersCard;