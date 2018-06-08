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



  router.get('/', (req,res,next) => {
    return res.json('hello world')
  })

  router.post('/', function(req, res, next){
    console.log(req.body)
    var mailOpts = {
        from: 'Overchat@noreply.com',
        to: req.body.to,
        subject: req.body.subject,
        text : req.body.text,
        html : '<b>test message form mailgun</b>'
    };

    nodemailerMailgun.sendMail(mailOpts, function (err, response) {
        if (err) res.send(err);
        else {
          res.send('email sent!');
        }
    });
});



module.exports = router;