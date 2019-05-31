import React, { Component } from 'react';
// RHL only for front end development
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Header from '../src/components/Header.js';
import Contact from '../src/components/Contact.jsx';
import About from '../src/components/About.jsx';
import Home from '../src/components/Home.jsx';
import Links from '../src/components/Link.jsx';







class App extends Component {
  render() {
    return<div>

      <Header />
      <Home />
      <Router>
       <div>
         <Links />
         <Route exact path="/" component={Home} />
         <Route path="/about" component={About} />
         <Route path="/contact" component={Contact} />
         </div>
       </Router>
    </div>
  }
}
// hot export works with RHL. Remove line 11 when starting fullstack integration
//export default hot(module)(App);
// Uncomment line 13 & delete line 11 when starting fullstack integration
 export default App;
