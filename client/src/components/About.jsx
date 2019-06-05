
import React, { Component } from 'react';
import Gallery from './Gallery.jsx'
import  '../dist/LightboxPage.css'
import Demo from './p5Carousel.jsx'


class About extends Component {
  constructor(props) {
    super(props)
  }


  render () {
    return (<div className="row">
              <div className="col">
                <Gallery/>
                <Demo/>
            </div>
          </div>)


  }


}








export default About;
