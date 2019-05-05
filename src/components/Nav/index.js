import React from 'react';
import AvengersLogo from '../AvengersLogo';
import Score from '../Score';
import './style.css';

function Nav({ logo, rounds, wins, lost }) {  
  return (
    <nav>
      <div id="navTop">
        <AvengersLogo 
          logo={logo[0]} 
        />
        <Score 
          rounds={rounds}
          wins={wins}
          lost={lost}
        />
      </div>
      <div id="navBottom"></div>
    </nav>
  )
}

export default Nav;