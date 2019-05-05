import React, { Component } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Images from './images.json';
import Logos from './logos.json';

class App extends Component {
  state = {}

  render() {
    return (
      <div>
        <Nav logo={Logos} />
        <Header logo={Logos} />
        <Main images={Images} />
        <Footer />
      </div>
    )
  }
}

export default App;