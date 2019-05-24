import React from 'react';
import {BrowserRouter as Router,
        Route,
        NavLink
} from 'react-router-dom';
import  css from '/home/hc-29/Documents/Fer/thesis_eye/client/src/dist/Links.css'


const Links = () => (
  <div id="navbar">
    <nav>
      <div id="nHome">
        <NavLink to="/">Home</NavLink>
      </div>
      <div id="nAbout">
        <NavLink to="/about">About</NavLink>
      </div>
      <div id="nContac">
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  </div>


)

export default Links;
