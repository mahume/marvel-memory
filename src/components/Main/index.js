import React from 'react';
import AvengersCard from '../AvengersCard';
import './style.css';

function Main({ images, handler, clickLost }) {
  const className = clickLost ? 'character animate shake' : 'character'
  
  return (
    <main>
      <div id="image-wrapper">
        {images.map(image => (
            <AvengersCard 
              className={className}
              key={image.id} 
              id={image.id}
              name={image.name}
              image={image.image} 
              handler={handler}
              clickLost={clickLost}
            ></AvengersCard>
          )
        )}
      </div>
    </main>
  );
}

export default Main;