const Listing = require('../models/Listing')

// make listing create new listing
exports.create = function(req , res) {
  //create a new listing object
  let listing = new Listing(req.body)
  listing.create().then(()=>{
      console.log("Creating Listing")
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

// update listing

// delete listing 
