import React from 'react';
import AvengersCard from '../AvengersCard';
import './style.css';

function Main({ images }) {
  return (
  <main>
    {images.map(image => <img className="character" key={image.id} src={image.image} alt={image.name}></img>)}
  </main>
  );
}

export default Main;