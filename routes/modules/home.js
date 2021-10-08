// Import express
const express = require('express')
// Import express router
const router = express.Router()

// Set route of home page
router.get('/', (req, res) => {
  res.render('index')
})

// Export home route
module.exports = router