import React from 'react';
import './style.css';

function AvengersCard({ id, image, name, handler, lost }) {
  let className = 'character'
  if (lost) {
    className += ' animated shake'
  }
  return (
    <img
      className={className}
      src={image}
      alt={name}
      onClick={() => handler(id)}
    >
    </img>
  );
}

export default AvengersCard;