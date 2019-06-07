import React, {Component} from 'react';
//import axios from 'axios';
import '../dist/ContactForm.css'
import axios from 'axios'
class ContactForm extends Component {

    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST",
            url:"/send",
            data: {
                name: name,
                email: email,
                message: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent.");
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render(){
        return(
      <div className="background">
      <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
        <div className="container">
          <div className="screen">
            <div className="screen-header">
              <div className="screen-header-left">
                <div className="screen-header-button close"></div>
                <div className="screen-header-button maximize"></div>
                <div className="screen-header-button minimize"></div>
              </div>
              <div className="screen-header-right">
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
                <div className="screen-header-ellipsis"></div>
              </div>
            </div>
            <div className="screen-body">
              <div className="screen-body-item left">
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>ME</span>
                </div>
                <div className="app-contact">CONTACT INFO : +52 55 23 25 92 16</div>
              </div>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">

                    <input className="app-form-control" placeholder="NAME"  id="name">
                    </input>
                  </div>
                  <div className="app-form-group">
                    <input className="app-form-control" placeholder="EMAIL" id="email">
                    </input>
                  </div>


                  <div className="app-form-group message">
                    <textarea className="app-form-control" placeholder="MESSAGE" height="400px"></textarea>
                  </div>
                  <div className="app-form-group buttons">
                    <button  className="app-form-button">SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
           </div>
             </form>
      </div>


        )
    }
}

export default ContactForm;
