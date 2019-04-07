const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const mongoose = require("mongoose");

// Load Admin model
const Admin = require("../../models/Admin");

// Load validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

/*  @route      GET api/admin/register
    @desc       Tests if route works
    @access     Public
*/
router.get("/register", (req, res) => {
  res.json({ msg: "register testing" });
});

/*  @route      POST api/admin/register
    @desc       Creates admin account
    @access     Private
*/
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Admin.findOne({ email: req.body.email }).then(user => {
    if (user) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const newAdmin = new Admin({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newAdmin.password, salt, (err, hash) => {
          if (err) throw err;

          newAdmin.password = hash;
          newAdmin
            .save()
            .then(user => {
              res.json(user);
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});

/*  @route      POST api/admin/login
    @desc       Login to admin account
    @access     Private
*/
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Finding admin
  Admin.findOne({ email }).then(user => {
    if (!user) {
      errors.email = "User not found";
      return res.status(400).json(errors);
    }

    // Auth password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          name: user.name
        };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password is incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

module.exports = router;
