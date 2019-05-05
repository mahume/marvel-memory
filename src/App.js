import React, { Component } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Images from './images.json';
import Logos from './logos.json';

class App extends Component {
  state = {
    images: [1, 2],
    wins: 0,
    loses: 0,
  }

  handleClick = id => {
    
    console.log(` ${id}`);
    const images = this.state.images;
    
    if (!images.includes(id)) {
      this.setState({ wins: this.state.wins + 1 })
    } else {
      this.setState({ loses: this.state.loses + 1 })
    }    
  }
  
  handleShuffle = arr => {
    arr.sort(() => Math.random() - 0.5);
  }


  render() {
    return (
      <div>
        <Nav 
          logo={Logos} 
          wins={this.state.wins}
          loses={this.state.loses}
        />
        <Header 
          logo={Logos}
        />
        <Main 
          images={Images} 
          handler={this.handleClick}
        />
        <Footer />
      </div>
    )
  }
}

export default App;