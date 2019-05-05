import React from 'react';
import Image from '../../images.json';
import './style.css';

function AvengersLogo(props) {
  // return <img src="images/avengers-logo.png"></img>;
  return <img src={Image[0].image} alt={Image[0].name}></img>;
}

export default AvengersLogo;