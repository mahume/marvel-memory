import React from 'react';
import './style.css';

function AvengersCard({ image }) {
  return (
    <img
      className="character"
      src={image.image}
      alt={image.name}
    >
    </img>
  );
}

export default AvengersCard;