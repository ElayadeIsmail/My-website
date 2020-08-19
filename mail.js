const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
const keys = require("./keys");

const auth = {
  auth: {
    api_key: process.env.API_KEY || keys.API_KEY,
    domain: process.env.DOMAIN || keys.DOMAIN,
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, message, callback) => {
  const mailOptions = {
    from: email,
    to: "elayadeismail@gmail.com",
    subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return callback(err, null);
    } else {
      return callback(null, data);
    }
  });
};

module.exports = sendMail;
