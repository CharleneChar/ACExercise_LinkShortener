// Import express
const express = require('express')
// Import express router
const router = express.Router()
// Imoprt schema
const Link = require('../../models/link')
// Import link_shortener.js
const linkShortener = require('../../link_shortener')
// Formulate a constant prefix of the shortened link before five random elements (e.g. numbers or characters)
const prePath = 'http://localhost:3004/links/cslinkshortener/'

// Set route for create in CRUD
router.post('/', (req, res) => {
  let shortenedLink = ''
  const originalLink = req.body.link
  // Check in database to see if the link has been shortened before
  Link.findOne({ originalLink: originalLink }, function (err, result) {
    if (err) { console.log(error) }
    if (!result) {
      console.log('f')
      // Pass link data to be shortened into link shortener
      randomElements = linkShortener()
      shortenedLink = prePath + randomElements
      // Create new data into database
      Link.create({ originalLink: originalLink, shortenedLink: shortenedLink, randomElements: randomElements })
        .then(() => res.render('result', { shortenedLink: shortenedLink }))
        .catch(error => console.log(error))
    }
    if (result) {
      // Retrieve existing data from database
      shortenedLink = result.shortenedLink
      res.render('result', { shortenedLink: shortenedLink })
    }
  })
})

// Set route for Read in CRUD
router.get('/cslinkshortener/:randomElements', (req, res) => {
  const randomElements = req.params.randomElements
  Link.findOne({ randomElements: randomElements })
    .lean()
    .then((result) => res.redirect(`${result.originalLink}`))
    .catch(error => console.log(error))
})

// Export home route
module.exports = router