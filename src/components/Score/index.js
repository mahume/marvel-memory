import React from 'react';
import './style.css'

function Score({ wins, loses }) {  
  return (
    <div id="score">
      Wins <span>{wins}</span> | Loses <span>{loses}</span>
    </div>
  );
}

export default Score;