import React from 'react';
import AvengersCard from '../AvengersCard';
import './style.css';

function Main({ images, handler }) {
  return (
  <main>
    {images.map(image => {
      return (
        <img 
          className="character" 
          key={image.id} 
          src={image.image} 
          alt={image.name}
          onClick={() => handler(images.id)}
        ></img>
      );
    })}
  </main>
  );
}

export default Main;