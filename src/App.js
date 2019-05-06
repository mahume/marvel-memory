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
    correct: 0,
    clickCorrect: false,
    clickLost: false,
  }

  handleClick = id => {
    const images = this.state.images;
    
    if (this.state.images.length === 11) {
      this.setState({ rounds: this.state.rounds + 1 })
      this.setState({ images: [] })
      this.setState({ correct: 0 })
      this.setState({ clickCorrect: false })
      this.setState({ clickLost: false })
    } else if (!images.includes(id)) {
      this.setState({ correct: this.state.correct + 1 })
      this.setState({ images: [...this.state.images, id] })
      this.setState({ clickCorrect: true })
      this.setState({ clickLost: false })
    } else {
      this.setState({ images: [] })
      this.setState({ rounds: 0 })
      this.setState({ correct: 0 })
      this.setState({ clickCorrect: false })
      this.setState({ clickLost: true })
    }    
  }
  
  handleShuffle = arr => arr.sort(() => Math.random() - 0.5)

  render() {
    return (
      <div>
        <Nav 
          logo={Logos} 
          rounds={this.state.rounds}
          correct={this.state.correct}
          clickCorrect={this.state.clickCorrect}
          />
        <Header 
          logo={Logos}
        />
        <Main 
          images={this.handleShuffle(Images)} 
          handler={this.handleClick}
          clickLost={this.state.clickLost}
        />
        <Footer />
      </div>
    )
  }
}

export default App;