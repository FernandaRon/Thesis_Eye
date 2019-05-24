import React, { Component } from 'react';
// RHL only for front end development
import { hot } from 'react-hot-loader';
import Header from '/home/hc-29/Documents/Fer/thesis_eye/client/src/components/Header.js';
import '/home/hc-29/Documents/Fer/thesis_eye/client/src/dist/Header.css'
import P5Wrapper from 'react-p5-wrapper';
import NavbarPage from '/home/hc-29/Documents/Fer/thesis_eye/client/src/components/NavBar.jsx'

class App extends Component {
  render() {
    return<div>
      <NavbarPage />
      <Header />
      <div>Welcome to a Modern Minimal React Boilerplate</div>;
    </div>
  }
}
// hot export works with RHL. Remove line 11 when starting fullstack integration
//export default hot(module)(App);
// Uncomment line 13 & delete line 11 when starting fullstack integration
 export default App;
