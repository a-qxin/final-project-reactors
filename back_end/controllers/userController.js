const User = require('../models/User')
const Listing = require('../models/Listing')
const jwt = require('jsonwebtoken')


exports.apiMustBeLoggedIn = function (req, res, next){
    try {
        req.apiUser = jwt.verify(req.body.token, process.env.JWTSECRET)
        next()
    } catch (error) {
        res.json("Sorry you must provide a valid token.")
    }
}



exports.doesUsernameExist = function(req, res){
    User.findByUsername(req.body.username).then(function(){
        res.json(true)
    }).catch(function(){
        res.json(false)
    })
}

exports.doesEmailExist = async function(req, res){
    let emailBool = await User.doesEmailExist(req.body.email)
    res.json(emailBool)
}



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


exports.login = function(req , res) {
    //create new user object
    let user = new User(req.body)

    //User login. Promise returned
    user.login().then((result)=>{
        //Set session data for user
        req.session.user= {avatar: user.avatar, username: user.data.username, _id: user.data._id}
        req.session.save(()=>{
            //Redirect after session data is saved
            res.redirect('/')
        })
    }).catch((err)=>{
        //Save errors in sessions using flash
        req.flash('errors',err)
        req.session.save(()=>{
            res.redirect('/')
        })
    })
}


exports.logout = function(req , res) {
    //destroy user session
    req.session.destroy(()=>{
        res.redirect('/')
    })
}



exports.register = function(req , res) {
    //create a new user object
    let user = new User(req.body)
    user.register().then(()=>{
        req.session.user = {avatar: user.avatar, username: user.data.username , _id: user.data._id}
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


// return user object on success
exports.ifUserExists = function(req, res, next) {
    User.findByUsername(req.params.username).then(function(userDocument) {
        req.profileUser = userDocument
        next()
    }).catch(function() {
        res.render("404")
    })
}
