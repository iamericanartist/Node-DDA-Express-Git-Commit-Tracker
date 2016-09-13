"use strict"

////////////////////////////////// SETTING UP //////////////////////////////////
// npm init
// npm install express pug --save
// npm install cheerio express pug node-fetch --save

// IF WE WANT BOOTSTRAP
// npm install bower
// bower init --y
// node_modules/.bin/bower init
// touch .bowerrc
// node_modules/.bin/bower install bootstrap --save


//REQUIRES
const express = require("express")
const app = express()


//GET PORT from environment and store in Express
const port = process.env.PORT || 3000


//CONFIGURATION
app.set("port", port)
// sets engine to pug (which is already an engine)
app.set("view engine", "pug")


//////////////////////////  MIDDLEWARES(above routes)  //////////////////////////
//middlewares (above routes always)
app.use(express.static("public"))
app.locals.company = "Slyce of Lyfe"


// routes
app.use(routes)
// routes(app)


// Custom 404 page
app.use((req, res) =>
  res.render('404')
)

//ERROR HANDLING MIDDLEWARES (AFTER ALL ROUTES)
// 404: Not Found Catch and pass to error handling middleware
app.use((req, res, next) => {
  // console.error("404")
  const err = Error("Not Found qwerty")
  err.status = 404
  next(err)
})



app.listen(port, () => {
  console.log(`Express server listening on port ${port}`)
})
