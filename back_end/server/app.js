const express = require("express");
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
// const csrf = require('csurf')
const cors = require('cors')
const markdown = require('marked')
const sanitizeHTML = require('sanitize-html')
const app = express();

//Middleware to parse incoming request bodies
app.use(express.json())
app.use(express.urlencoded({extended: false}))

let sessionOptions = session({
  secret: "JavaScript is so not cool",
  store: new MongoStore({client: require('./db')}),
  resave: false,
  saveUninitialized: false,
  cookie: {maxAge: 1000 * 60 * 60 * 24, httpOnly: true}
})

app.use(sessionOptions)

//Middleware for locals
app.use(function(req, res, next){
  // make our markdown function available from within ejs templates
  res.locals.filterUserHTML = function(content){
      // return sanitizeHTML(markdown(content), {allowedTags:['p','br','ul','ol','li','strong','bold','i','em','h1','h2','h3','h4','h5','h6'],allowedAttributes: {}})
      return markdown(content)
  }

  //make current user id available on the req object
  if(req.session.user){req.visitorId = req.session.user._id} else{req.visitorId=0} 

  //make user session data available from within view templates
  res.locals.user = req.session.user

  next()
})


const router = require('./router')

//Make public accessible
app.use(express.static('public'))

//Add crsf protection
// app.use(csrf())

// Add cors
app.use(cors())

// app.use(function(req, res, next){
//   res.locals.csrfToken = req.csrfToken()
//   next()
// })

const wss = require('./webSocket.js')

//Set base router
app.use('/' , router)


// app.use( function (err, req, res, next){
//   if(err){
//       if(err.code == "EBADCSRFTOKEN"){
//           // req.flash('errors',"Cross site request forgery detected")
//           req.session.save(()=> res.redirect('/'))
//       } else {
//           res.send("Its a 404")
//       }
//   }
// })

const server = require('http').createServer(app)

//Export express app
module.exports = server