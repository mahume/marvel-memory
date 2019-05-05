import React from 'react';
import AvengersTitle from '../AvengersTitle';
import './style.css';

function Header({ logo }) {
  return (
    <header>
      <AvengersTitle logo={logo[1]} />
    </header>
  );
}

export default Header;
