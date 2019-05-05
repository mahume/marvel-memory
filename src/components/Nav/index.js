import React from 'react';
import AvengersLogo from '../AvengersLogo'
import './style.css';

function Nav(props) {
  return (
    <nav>
      <div id="navTop">
        <AvengersLogo />
      </div>
      <div id="navBottom"></div>
    </nav>
  )
}

export default Nav;