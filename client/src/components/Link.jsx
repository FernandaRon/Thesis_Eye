import React from 'react';
import {BrowserRouter as Router,
        Route,
        NavLink
} from 'react-router-dom';
import  '../dist/Links.css'


const Links = () => (
  <div id="navbar" className="nav-link disabled">
    <nav>
      <div id="nHome">
        <NavLink to="/">Home</NavLink>
      </div>
      <div id="nAbout">
        <NavLink to="/work">Work</NavLink>
      </div>
      <div id="nContac">
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  </div>


)

export default Links;
