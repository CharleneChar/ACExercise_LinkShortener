// Import mongoose
const mongoose = require('mongoose')

// Connect to the project's database in MongoDB
mongoose.connect('mongodb://localhost/link-shortener', { useNewUrlParser: true, useUnifiedTopology: true })

// Store connection status
const db = mongoose.connection

// Listen to check for and report connection status
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!');
})

// Export mongoose configuration
module.exports = db