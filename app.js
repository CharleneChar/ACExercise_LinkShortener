// Import express
const express = require('express')
const app = express()
// Import method-override
const methodOverride = require('method-override')
// Import express-handlebars
const exphbs = require('express-handlebars')
// Set port for this project's server
const PORT = 3004
// Import express router
const routes = require('./routes')

// Import database configuration
require('./config/mongoose')

// Process request and so make CRUD possible in a RESTful way
app.use(methodOverride('_method'))

// Set template engine to be handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Process request and so make a req.body object
app.use(express.urlencoded({ extended: true }))

// Process every request and lead each into its right route using express router
app.use(routes)

// Start server and listen for request coming from port
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})