import React, { Component } from 'react';
// RHL only for front end development
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Header from '/home/hc-29/Documents/Fer/thesis_eye/client/src/components/Header.js';
import '/home/hc-29/Documents/Fer/thesis_eye/client/src/dist/Header.css'
import Contact from '/home/hc-29/Documents/Fer/thesis_eye/client/src/components/Contact.jsx';
import About from '/home/hc-29/Documents/Fer/thesis_eye/client/src/components/About.jsx';
import Home from '/home/hc-29/Documents/Fer/thesis_eye/client/src/components/Home.jsx';
import Links from '/home/hc-29/Documents/Fer/thesis_eye/client/src/components/Link.jsx';
class App extends Component {
  render() {
    return<div>

      <Header />
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
