// Import express
const express = require('express')
// Import express router
const router = express.Router()
// Import home route from home.js
const home = require('./modules/home')
// Import links route from links.js
const links = require('./modules/links')

// Direct request with '/' to home route
router.use('/', home)
// Direct request with '/links' to links route 
router.use('/links', links)
// Export router
module.exports = router