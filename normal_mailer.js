'use strict';
const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
var mail_handler = ((ToSend,ToSendName,ToMessage,ToSubject) => {
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'princebatra2315@gmail.com',
    pass: ''
  }
});

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"CA Gateway Academy" <princebatra2315@gmail.com>', // sender address
        to: ToSend,// list of receivers
        subject: ToSubject, // Subject line
        text: 'Hello world?', // plain text body
        html: `<p>Hi, <b>${ToSendName}</b><br><p>${ToMessage}</p><br><p>Best Regards,</p><p>Rohit Batra</p><p>Team CA Gateway Academy</p>` // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});

module.exports = mail_handler;