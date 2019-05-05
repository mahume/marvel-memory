import React from 'react';
import './style.css';

function AvengersCard({ id, image, name, handler }) {
  return (
    <img
      className="character"
      src={image}
      alt={name}
      onClick={() => handler(id)}
    >
    </img>
  );
}

export default AvengersCard;