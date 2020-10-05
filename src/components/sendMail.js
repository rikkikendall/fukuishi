var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');


// let mailTransporter = nodemailer.createTransport({ 
//     service: 'gmail', 
//     auth: { 
//         user: 'kendall.rikki@gmail.com', 
//         pass: 'rikki1526'
//     } 
// }); 
  
// let mailDetails = { 
//     from: 'yukikokobaya@gmail.com', 
//     to: 'kendall.rikki@gmail.com', 
//     subject: 'Test mail', 
//     text: 'Node.js testing mail for GeeksforGeeks'
// }; 
  
// mailTransporter.sendMail(mailDetails, function(err, data) { 
//     if(err) { 
//         console.log('Error Occurs'); 
//     } else { 
//         console.log('Email sent successfully'); 
//     } 
// });

let mailTransporter = nodemailer.createTransport({
    host: "smtp.gmail.com", //replace with your email provider
    port: 587,
    auth: {
      user: "kendall.rikki@gmail.com", //replace with the email address
      pass: "rikki1526" //replace with the password
    }
  });

  // verify connection configuration
  mailTransporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var subject = req.body.subject
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message} `
    var mail = {
      from: name,
      to: 'kendall.rikki@gmail.com', // receiver email,
      subject: 'Contact Form',
      text: content
    }
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
  })

//   var transport = {
//       host = 'smtp.gmail.com',
//       auth: {
//         user: "kendall.rikki@gmail.com", //replace with the email address
//         pass: "rikki1526" //replace with the password
//       }
//   }

//   var transporter = nodemailer.createTransport(transport)

//   // verify connection configuration
//   transporter.verify(function(error, success) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Server is ready to take our messages");
//     }
//   });

//   router.post('/send', (req, res, next) => {
//     var name = req.body.name
//     var email = req.body.email
//     var subject = req.body.subject
//     var message = req.body.message
//     var content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message} `
//     var mail = {
//       from: name,
//       to: 'kendall.rikki@gmail.com', // receiver email,
//       subject: 'Contact Form',
//       text: content
//     }
//     transporter.sendMail(mail, (err, data) => {
//       if (err) {
//         res.json({
//           status: 'fail'
//         })
//       } else {
//         res.json({
//          status: 'success'
//         })
//       }
//     })
//   })
