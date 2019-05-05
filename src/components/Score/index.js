import React from 'react';
import './style.css'

function Score({ rounds, wins, loses }) {  
  return (
    <div id="score">
      Round:<span className="number">{rounds}</span>
      <br />
      Wins:<span className="number">{wins}</span>
      <br />
      Loses:<span className="number">{loses}</span>
    </div>
  );
}

export default Score;