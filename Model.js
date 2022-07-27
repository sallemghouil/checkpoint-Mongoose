const mongoose = require("mongoose");
const schema = mongoose.Schema;

const contactSchema = schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  favouriteFoods: {
    type: [String],
    required: true,
  },
  age: {
     type: Number
     },
  phone: Number,
  dateCreation: {
    type: Date,
    default: Date.now(),
  },
});
const contact = mongoose.model("contact", contactSchema);
module.exports = contact;

//create the schema
//create a model
//export the model