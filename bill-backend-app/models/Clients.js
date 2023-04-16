const mongoose = require('mongoose')
const { Schema } = mongoose

const clientSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  office: String,
  phone: String,
  email: {
    type: String,
    required: true
  },
  company: String,
  addressLine1: String,
  addressLine2: String,
  zipCode: String,
  city: String,
  selectedCountry: String,
  country: Array,
  addedDate: String,
});

module.exports = mongoose.model('Client', clientSchema)