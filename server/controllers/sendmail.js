const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Yahoo',
        auth: {
            user: 'miguel.ganoza@yahoo.com', // Your Yahoo email address
            pass: process.env.YAHOO_APP_API_KEY // Your Yahoo email password
        }
    });

    const mailOptions = {
        from: 'miguel.ganoza@yahoo.com',
        to: 'miguel.ganoza@yahoo.com', // Your email address
        subject: 'Portfolio Form Submission',
        text: `Name: ${name} \nEmail: ${email} \nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error occurred:', error);
            res.send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.send('Email sent successfully');
        }
    });
}
  
  module.exports = { sendEmail };