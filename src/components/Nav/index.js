import React from 'react';
import AvengersLogo from '../AvengersLogo';
import Score from '../Score';
import './style.css';

function Nav({ logo, rounds, wins, loses }) {  
  return (
    <nav>
      <div id="navTop">
        <AvengersLogo 
          logo={logo[0]} 
        />
        <Score 
          rounds={rounds}
          wins={wins}
          loses={loses}
        />
      </div>
      <div id="navBottom"></div>
    </nav>
  )
}

export default Nav;