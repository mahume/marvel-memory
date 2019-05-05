import React from 'react';
import AvengersCard from '../AvengersCard';
import './style.css';

function Main({ images, handler, lost }) {
  return (
    <main>
      <div id="image-wrapper">
        {images.map(image => (
            <AvengersCard 
              className="character" 
              key={image.id} 
              id={image.id}
              name={image.name}
              image={image.image} 
              handler={handler}
              lost={lost}
            ></AvengersCard>
          )
        )}
      </div>
    </main>
  );
}

export default Main;