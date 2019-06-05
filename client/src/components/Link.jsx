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
        <NavLink to="/"><input type="image" src="https://img.icons8.com/nolan/64/000000/menu-2.png"  width="40px" height="40px" /></NavLink>
      </div>
      <div id="nAbout">
        <NavLink to="/work"><input type="image" src="https://img.icons8.com/nolan/64/000000/visible.png"  width="40px" height="40px" /></NavLink>
      </div>
      <div id="nContac">
        <NavLink to="/contact"><input type="image" src="https://img.icons8.com/nolan/64/000000/send.png"  width="40px" height="40px" /></NavLink>
      </div>
    </nav>
  </div>


)

export default Links;
