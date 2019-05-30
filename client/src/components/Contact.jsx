import React from 'react';
import ContactForm from './ContactForm.jsx'

const Contact = (props) => (
  <div>
  <ContactForm />
  <div id="icons">
      <a href="https://twitter.com/cotuh_">
        <img src="https://i.imgur.com/fTZMuQ4.png">
        </img>
      </a>


<a href="https://www.linkedin.com/in/fernanda-rondon-450086186">
  <img src="https://imgur.com/IedKYhP.png">
  </img>
</a>
  <a href="https://www.instagram.com/ojoyaparte_">
  <img src="https://i.imgur.com/p9QZa3z.png">
  </img>
</a>

<a href="https://www.github.com/FernandaRon">
  <img src="https://i.imgur.com/matlDSE.png">
  </img>
</a>
  <form>{ContactForm}</form>
  </div>
  </div>

  )



export default Contact
