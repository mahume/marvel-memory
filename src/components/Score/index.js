import React from 'react';
import './style.css'

function Score({ rounds, wins, lost }) {  
  return (
    <div id="score">
      Round:<span className="number">{rounds}</span>
      <br />
      Wins:<span className="number">{wins}</span>
      <br />
      Lost:<span className="number">{lost}</span>
    </div>
  );
}

export default Score;