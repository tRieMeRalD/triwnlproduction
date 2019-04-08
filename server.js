const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");

const contact = require("./routes/api/contact");
const admin = require("./routes/api/admin");

const app = express();

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to mongoose
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Use routes
app.use("/api/contact", contact);
app.use("/api/admin", admin);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  /* app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    //res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  }); */
  app.use(express.static(path.join(__dirname, "client/build")));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
