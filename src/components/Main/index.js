import React from 'react';
import AvengersCard from '../AvengersCard';
import './style.css';

function Main({ image }) {
  return (
  <main>
    <AvengersCard image={image[2]} />
  </main>
  );
}

export default Main;