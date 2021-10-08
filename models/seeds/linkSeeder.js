// Import database configuration
const db = require('../../config/mongoose')
// Import schema
const Link = require('../link')
// Import link_shortener.js
const linkShortener = require('../../link_shortener')
// Formulate a constant prefix of the shortened link before five random elements (e.g. numbers or characters)
const prePath = 'http://localhost:3004/links/cslinkshortener/'

db.once('open', () => {
  console.log('mongodb connected!')
  // Create data sample
  const urls = ['https://www.google.com/', 'https://stackoverflow.com/', 'https://leetcode.com/']
  for (let i in urls) {
    // Pass link data to be shortened into link shortener
    randomElements = linkShortener()
    shortenedLink = prePath + randomElements
    Link.create({
      originalLink: urls[i], shortenedLink: shortenedLink, randomElements: randomElements
    })
  }
})