import React, {Component} from 'react';
//import axios from 'axios';
import '/home/hc-29/Documents/Fer/thesis_eye/client/src/dist/ContactForm.css'
class ContactForm extends Component{

    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST",
            url:"http://localhost:3002/send",
            data: {
                name: name,
                email: email,
                messsage: message
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
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
      <div class="background">
        <div class="container">
          <div class="screen">
            <div class="screen-header">
              <div class="screen-header-left">
                <div class="screen-header-button close"></div>
                <div class="screen-header-button maximize"></div>
                <div class="screen-header-button minimize"></div>
              </div>
              <div class="screen-header-right">
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
              </div>
            </div>
            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title">
                  <span>CONTACT</span>
                  <span>ME</span>
                </div>
                <div class="app-contact">CONTACT INFO : +52 55 23 25 92 16</div>
              </div>
              <div class="screen-body-item">
                <div class="app-form">
                  <div class="app-form-group">
                    <input class="app-form-control" placeholder="NAME" value=""  id="name">
                    </input>
                  </div>
                  <div class="app-form-group">
                    <input class="app-form-control" placeholder="EMAIL" id="email">
                    </input>
                  </div>


                  <div class="app-form-group message">
                    <input class="app-form-control" placeholder="MESSAGE" id="message">
                    </input>
                  </div>
                  <div class="app-form-group buttons">
                    <button  class="app-form-button">SEND</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
           </div>
      </div>
      </form>

        )
    }
}

export default ContactForm;
