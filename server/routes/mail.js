const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');
const config = require('../config');

// var auth = {
//     auth: {
//       api_key: config.MailgunAPI,
//       domain: process.env.DOMAIN
//     }
//   }

  // var nodemailerMailgun = nodemailer.createTransport(mg(auth));

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: config.user,
           pass: config.pass
       }
   });



  router.post('/', function(req, res, next){
    console.log(req.body)
    var text = req.body.text
    var mailOptions = {
        from: 'Overchat@noreply.com',
        to: req.body.to,
        subject: req.body.subject,
        html : `<p>${text}</p>`
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if(err) {
        console.log(err)
        return res.status(400).json('error')
      }
      else {
        console.log(info);
        return res.status(200).json('success')
      }
   });
});



module.exports = router;