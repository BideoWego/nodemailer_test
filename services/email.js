const nodemailer = require('nodemailer');

// Use the SendGrid transport
const sendGridTransport = require('nodemailer-sendgrid-transport');

// Use Heroku's SendGrid ENV variables
const _options = {
  service: 'SendGrid',
  auth: {
    api_user: process.env.SENDGRID_USERNAME,
    api_key: process.env.SENDGRID_PASSWORD
  }
};

// Create the SendGrid transport
const _transporter = nodemailer
  .createTransport(
    sendGridTransport(_options)
  );


const EmailService = {};


EmailService.send = (options) => {
  return new Promise((resolve, reject) => {
    _transporter.sendMail(options, (err, info) => {
      err ? reject(err) : resolve(info);
    });
  });
};




module.exports = EmailService;










