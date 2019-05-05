import React from 'react';
import AvengersLogo from '../AvengersLogo';
import Score from '../Score';
import './style.css';

function Nav({ logo, rounds, correct }) {  
  return (
    <nav>
      <div id="navTop">
        <AvengersLogo 
          logo={logo[0]} 
        />
        <Score 
          rounds={rounds}
          correct={correct}
        />
      </div>
      <div id="navBottom"></div>
    </nav>
  )
}

export default Nav;