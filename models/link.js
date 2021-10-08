// Import mongoose
const mongoose = require('mongoose')
// Set up schema the database
const Schema = mongoose.Schema
const linkSchema = new Schema({
  originalLink: {
    type: String,
    required: true
  },
  shortenedLink: {
    type: String,
    required: true
  },
  randomElements: {
    type: String,
    required: true
  }
})

// Export schema
module.exports = mongoose.model('Link', linkSchema)
