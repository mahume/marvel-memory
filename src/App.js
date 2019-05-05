import React, { Component } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Images from './images.json';
import Logos from './logos.json';

class App extends Component {
  state = {
    images: [],
    rounds: 0,
    wins: 0,
    lost: false,
  }

  handleClick = id => {
    const images = this.state.images;
    
    if (this.state.images.length === 11) {
      this.setState({ rounds: this.state.rounds + 1 })
      this.setState({ images: [] })
      this.setState({ wins: 0 })
    } else if (!images.includes(id)) {
      this.setState({ wins: this.state.wins + 1 })
      this.setState({ images: [...this.state.images, id] })
    } else {
      this.setState({ images: [] })
      this.setState({ rounds: 0 })
      this.setState({ wins: 0 })
      this.setState({ lost: true })
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
          rounds={this.state.rounds}
          wins={this.state.wins}
          />
        <Header 
          logo={Logos}
          />
        <Main 
          images={Images} 
          handler={this.handleClick}
          lost={this.state.lost}
        />
        <Footer />
      </div>
    )
  }
}

export default App;