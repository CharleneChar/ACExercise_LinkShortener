// Specify function of shortening link
function linkShortener() {
  const lowercaseEng = 'abcdefghijklmnopqrstuvwxyz'
  const uppercaseEng = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const number = '0123456789'
  const elements = lowercaseEng + uppercaseEng + number
  let randomSet = ''
  for (i = 0; i < 5; i++) {
    randomSet += elements[Math.floor(Math.random() * elements.length)]
  }
  return randomSet
}

// Export link shortener
module.exports = linkShortener