//const app = require('./config.js');

const port = (3000);


var express = require('express');

var nodemailer = require('nodemailer');
const creds = require('../server/nodemailer/config/config.js');
const bodyParser = require("body-parser");
const compression = require('compression');

const app = express();


app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/../client/dist"));

var transport = {
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  },tls:{
    rejectUnauthorized:false
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});
app.post('/send', (req, res, next) => {
  console.log(req.body)
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: 'rondon.fernanda11@gmail.com',  //Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {

      res.json({
        msg: 'success'
      })
  })
})



app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
