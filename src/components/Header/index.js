import React from 'react';
import AvengersTitle from '../AvengersTitle';
import './style.css';

function Header({ image }) {
  return (
    <header>
      <AvengersTitle image={image[1]} />
    </header>
  );
}

export default Header;
