const { ReplSet } = require('mongodb')
const Listing = require('../models/Listing')
const ObjectID = require('mongodb').ObjectID

// make listing create new listing
exports.create = function (req, res) {
    // TODO Add image attaching capability
    //create a new listing object
    let listing = new Listing(req.body, req.session.user._id)
    listing.create().then(() => {
        console.log("Creating Listing")
        req.session.save(() => {
            res.send("Listing Created")
        })
    }).catch((regErrors) => {
        req.session.save(() => {
            res.send(regErrors)
        })
    })
}

// update listing
exports.update = function (req, res) {
    console.log('In the update function')
    //create a new listing object
    let listing = new Listing(req.body, req.visitorId, req.body.listingId)
    listing.update().then((status) => {
        if (status == "success") {
            // post was updated in the db
            req.session.save(function () {
                res.send('Post successfully updated')
            })
        }
        else {
            req.session.save(function () {
                res.send("Validation errors")
            })
        }
    }).catch(() => {
        // a post with the requested id doesn't exist 
        // or if the current visitor is not the owner of the requested post
        req.session.save(() => {
            res.send("Post doesn't exist or you do not have the right permissions")
        })
    })
}


// delete listing 
exports.delete = function (req, res) {
    //create a new listing object
    let listing = new Listing(req.body)
    listing.delete().then(() => {
        console.log("Deleting Listing")
        req.session.save(() => {
            res.redirect('/')
        })
    }).catch((regErrors) => {
        regErrors.forEach((error) => {
            req.flash('regErrors', error)
        })
        req.session.save(() => {
            res.redirect('/')
        })
    })
}

// Get all listings for author
exports.getByAuthor = function (req, res) {
    Listing.getByAuthor(req.session.user).then(function (listings) {
        console.log(listings)
        res.send(listings)
    })
    .catch(function (err) {
        res.send(err)
    })
}


// Get all listings by Id
exports.getById = function (req, res) {
    Listing.findListingById(req.body.listingId, req.visitorId).then(function (listing) {
        res.send(listing)
    })
        .catch(function (err) {
            res.send(err)
        })
}

// Get all listings send array with all listings on success
exports.getAllListings = function (req, res) {
    Listing.getAllListings(req.visitorId).then(function (listings) {
        console.log(listings)
        res.send(listings)
    })
    .catch(function (err) {
        res.send(err)
    })
}
