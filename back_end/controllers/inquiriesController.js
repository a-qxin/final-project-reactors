const Inquiry = require('../models/Inquiries')

// make inquiry create new inquiry
exports.create = function(req , res) {
  //create a new inquiry object
  let inquiry = new Inquiry(req.body)
  listing.create().then(()=>{
      console.log("Creating Inquiry")
      req.session.save(()=>{
          res.redirect('/')
      })
  }).catch((regErrors)=>{
      regErrors.forEach((error)=>{
          req.flash('regErrors', error)
      })
      req.session.save(()=>{
          res.redirect('/')
      })
  })
}

// update inquiry
exports.mustBeLoggedIn = function (req, res, next){
    if(req.session.user){
        next()
    } else {
        req.flash("errors", "You must be logged in to perform that action")
        req.session.save(()=>{
            res.redirect('/')
        })
    }
}

// delete inquiry
