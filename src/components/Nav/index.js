import React from 'react';
import AvengersLogo from '../AvengersLogo';
import Score from '../Score';
import './style.css';

function Nav({ logo, rounds, correct, clickCorrect }) {  
  const className = clickCorrect ? 'number animated flash' : 'number'

  return (
    <nav>
      <div id="navTop">
        <AvengersLogo 
          logo={logo[0]} 
        />
        <Score 
          className={className}
          rounds={rounds}
          correct={correct}
        />
      </div>
      <div id="navBottom"></div>
    </nav>
  )
}

export default Nav;