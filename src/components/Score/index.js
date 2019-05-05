import React from 'react';
import './style.css'

function Score({ rounds, correct }) {  
  return (
    <div id="score">
      Round:<span className="number">{rounds}</span>
      <br />
      Correct:<span className="number">{correct}</span>
    </div>
  );
}

export default Score;