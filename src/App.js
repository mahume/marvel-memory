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
    loses: 0,
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
      this.setState({ loses: this.state.loses + 1 })
      this.setState({ images: [] })
    }    
    console.log(this.state.images);
    
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