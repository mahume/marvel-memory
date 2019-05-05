import React from 'react';
import AvengersCard from '../AvengersCard';
import './style.css';

function Main({ images, handler }) {
  return (
    <main>
      {images.map(image => (
          <AvengersCard 
            className="character" 
            key={image.id} 
            id={image.id}
            name={image.name}
            image={image.image} 
            handler={handler}
          ></AvengersCard>
        )
      )}
    </main>
  );
}

export default Main;