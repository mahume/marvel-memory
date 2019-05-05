import React from 'react';
import AvengersCard from '../AvengersCard';
import './style.css';

function ImageWrapper({ images }) {
  return (
    <div>
      {images.map(image => <img key={image.id} src={image.image} alt={image.name}></img>)}
    </div>
  )
}

export default ImageWrapper;