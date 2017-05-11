const nodemailer = require('nodemailer');


// Note this only works if less secure apps are
// enabled with Google
const _transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});


const EmailService = {};


EmailService.send = (options) => {
  return new Promise((resolve, reject) => {
    _transporter.sendMail(options, (err, info) => {
      err ? reject(err) : resolve(info);
    });
  });
};




module.exports = EmailService;










