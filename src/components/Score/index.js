import React from 'react';
import './style.css'

function Score({ rounds, correct, className }) {  
  return (
    <div id="score">
      Round:<span className={className}>{rounds}</span>
      <br />
      Correct:<span className='number'>{correct}</span>
    </div>
  );
}

export default Score;