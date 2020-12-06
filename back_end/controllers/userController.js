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
    console.log(req.session.user)
    if(req.session.user){
        next()
    } else {
        res.send("You do not have authorization")
    }
}


exports.login = function(req , res) {
    //create new user object
    let user = new User(req.body)

    //User login. Promise returned
    user.login().then((result)=>{
        //Set session data for user
        req.session.user= {username: user.data.username, _id: user.data._id}
        req.session.save(()=>{
            //Redirect after session data is saved
            // res.redirect('/')
            console.log('logged in and session data saved')
            console.log(req.session.user)
            res.send('logged in')
        })
    }).catch((err)=>{
        //Save errors in sessions using flash
        // req.flash('errors',err)
        req.session.save(()=>{
            console.log(err)
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
        req.session.user = {username: user.data.username , _id: user.data._id}
        req.session.save(()=>{
            console.log(`Successfully registered user ${user.data.username}`)
            res.send(`Successfully registered user ${user.data.username}`)
        })
    }).catch((regErrors)=>{
        console.log(regErrors)
        res.send(regErrors)
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
