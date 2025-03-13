// const nodemailer = require("nodemailer");
// let transporter = nodemailer.createTransport({
//   // host: "smtp.zoho.in",
//   // port: 465,
//   service: "gmail",
//   secure: true, // true for 465, false for other ports
//   auth: {
//     user: "javiyaharsh03@gmail.com", // generated ethereal user
//     pass: "mbsx army dona ucyz", // generated ethereal password
//   },
// });

// exports.sendMail = async (receiverEmail, subject, body) => {

//   const mailOptions = {
//     from: 'javiyaharsh03@gmail.com',
//     to: receiverEmail,
//     subject: subject,
//     text: body
//   };
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return console.log(error);
//     }
//     console.log('Email sent: ' + info.response);
//   });
// };
require('dotenv').config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true, // Use SSL
  auth: {
    user: "wardrobewaveboutique@gmail.com", // Your email
    pass:"rccj pvng wjlj jkta", // App password
  },
});

exports.sendMail = async (receiverEmail, subject, body) => {
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender email
    to: receiverEmail, // Receiver email
    subject: subject, // Email subject
    text: body, // Email body
  };

  try {
    // Verify connection configuration
    await transporter.verify();
    console.log("SMTP is ready to send emails.");

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return info;
  } catch (error) {
    console.error("Error sending email: ", error);
    throw error;
  }
};
