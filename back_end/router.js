const express = require('express')
const router = express.Router()
const userController = require('./controllers/userController')
const listingController = require('./controllers/listingController')
const inquiriesController = require('./controllers/inquiriesContoller')


// User related routes
router.get('/', userController.home)
router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.post('/doesUsernameExist', userController.doesUsernameExist)
router.post('/doesEmailExist', userController.doesEmailExist)


// Listing related routes
router.post('/create-listing' , userController.mustBeLoggedIn, listingController.create)
router.post('/listing/:id/edit', userController.mustBeLoggedIn , listingController.edit)
router.post('/listing/:id/delete', userController.mustBeLoggedIn , listingController.delete)
router.get('/listing/:id' , listingController.getById)


// Inquiry related routes
router.post('/create-inquiry/:id', userController.mustBeLoggedIn, inquiriesController.create)
router.post('/inquiry/:id/edit', userController.mustBeLoggedIn, inquiriesController.edit)
router.post('/inquiry/:id/delete', userController.mustBeLoggedIn, inquiriesController.delete)
router.get('/inquiry/:id' , inquiriesController.getById)
