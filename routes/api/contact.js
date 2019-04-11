const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const request = require("request");
const mongoose = require("mongoose");

// Config
const keys = require("../../config/keys");

// Load ContactData model
const ContactData = require("../../models/ContactData");

// Load validation
const validateContactInput = require("../../validation/contact");

/*  @route      GET api/contact
    @desc       Tests contact route
    @access     Public
*/
router.get("/", (req, res) => {
  res.json({ msg: "testing" });
});

/*  @route      GET api/contact/all
    @desc       Gets all contact
    @access     Private
*/
router.get("/all", (req, res) => {
  ContactData.find()
    .sort({ date: -1 })
    .then(contacts => {
      res.json(contacts);
    })
    .catch(err => res.status(404).json({ contact: "There are no contacts" }));
});

/*  @route      DELETE api/contact/id
    @desc       Delete contact
    @access     Private
*/
router.delete("/:id", (req, res) => {
  ContactData.findById(req.params.id).then(contact => {
    contact
      .remove()
      .then(() => res.json({ success: true }))
      .catch(err =>
        res.status(404).json({ contactNotFound: "No Contact for this" })
      );
  });
});

/*  @route      POST api/contact/send
    @desc       Sends contact info
    @access     Public
*/
router.post("/send", (req, res, next) => {
  const { errors, isValid } = validateContactInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Adding to database
  const newContactData = new ContactData({
    emailAddress: req.body.email,
    name: req.body.name,
    subject: req.body.subject,
    message: req.body.message
  });

  newContactData.save().then(contactData => res.json(contactData));

  const output = `
  <p>You have a new message:</p>
  <h3>Information details</h3>
  <ul>
      <li>Name ${req.body.name}</li>
      <li>Subject ${req.body.subject}</li>
      <li>Email ${req.body.email}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>
  `;

  var captchaSolved = false;
  var view = false;

  if (
    req.body["g-recaptcha-response"] === undefined ||
    req.body["g-recaptcha-response"] === "" ||
    req.body["g-recaptcha-response"] === null
  ) {
    return res.redirect("/contact_error"), (view = true);
  }

  var secretKey = keys.captchaSecret;
  var verificationUrl =
    "https://www.google.com/recaptcha/api/siteverify?secret=" +
    secretKey +
    "&response=" +
    req.body["g-recaptcha-response"] +
    "&remoteip=" +
    req.connection.remoteAddress;

  request(verificationUrl, (error, response, body) => {
    body = JSON.parse(body);
    if (body.success !== undefined && !body.success) {
      return (captchaSolved = false), (view = true);
    }
    view = true;
    captchaSolved = true;
  });

  // Error in captcha
  router.use("*", (req, res) => {
    res.status(404).send("404");
  });

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let account = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      //service: 'gmail',
      //port: 587,
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: keys.emailAddress, // generated ethereal user
        pass: keys.emailPassword // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: "${req.body.name}", // sender address
      to: keys.emailAddress, // list of receivers
      subject: "New message from contact form", // Subject line
      html: output // html body
    };

    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        if (!captchaSolved && view) {
          console.log(err);
          next();
        } else {
          res.json({ error: "error" });
        }
      } else {
        if (captchaSolved && view) {
          console.log(info);
          res.json({ success: "success" });
        } else {
          res.json({ error: "error" });
        }
      }
    });
  }

  main().catch(console.error);
});

module.exports = router;
