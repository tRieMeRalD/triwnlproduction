const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ContactSchema = new Schema({
  contactId: {
    type: Schema.Types.ObjectId,
    ref: "contactIds"
  },
  emailAddress: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = ContactData = mongoose.model("contactData", ContactSchema);
