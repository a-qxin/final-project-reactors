const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const listingController = require('../controllers/listingController')
const inquiryController = require('../controllers/inquiryController')

router.get('/', (req,res)=>{res.send('Hello')})

// User related routes
router.post('/register', userController.register)
router.post('/login', userController.login)
router.get('/logout', userController.logout)
router.post('/doesUsernameExist', userController.doesUsernameExist)
router.post('/doesEmailExist', userController.doesEmailExist)
router.get('/getSessionState', userController.getSessionState)


// Listing related routes
router.post('/create-listing' , userController.mustBeLoggedIn, listingController.create)
router.post('/listing/update', userController.mustBeLoggedIn , listingController.update)
router.post('/listing/delete', userController.mustBeLoggedIn , listingController.delete)
router.get('/listing/getByAuthor' , listingController.getByAuthor)


// Inquiry related routes
//router.post('/create-inquiry', userController.mustBeLoggedIn, inquiryController.create)
router.post('/create-inquiry' ,inquiryController.create)
router.get('/inquiry' ,userController.mustBeLoggedIn, inquiryController.getById)
router.post('/inquiry/getByAuthor', inquiryController.getById)


module.exports = router