import React from 'react';
import AvengersLogo from '../AvengersLogo';
import Score from '../Score';
import './style.css';

function Nav({ image }) {  
  return (
    <nav>
      <div id="navTop">
        <AvengersLogo image={image[0]} />
        <Score />
      </div>
      <div id="navBottom"></div>
    </nav>
  )
}

export default Nav;