import React, { Component } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Images from './images.json';

class App extends Component {
  state = {}

  render() {
    return (
      <div>
        <Nav image={Images} />
        <Header image={Images} />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;