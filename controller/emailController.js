const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

//Send Email
const sendEmail = asyncHandler(async (data, req, res) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_ID, // your email address
      pass: process.env.APP_PASSWORD, // an app password generated for your Google account
    },
  });

  let info = await transporter.sendMail({
<<<<<<< HEAD
    from: '"Hey 👻" <abc@gmail.com>', // sender address
=======
    from: '"Hey" <abc@gmail.com>', // sender address
>>>>>>> 9b9e94a67d6430c2c6c5f9c327b40d915ed4dc52
    to: data.to, // list of receivers
    subject: data.subject, // Subject line
    text: data.text, // plain text body
    html: data.htm, // html body
  });

  console.log("Message sent: %s", info.messageId);
});

module.exports = sendEmail;
