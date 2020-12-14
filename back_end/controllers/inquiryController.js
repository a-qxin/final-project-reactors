const Inquiry = require('../models/Inquiry')
const Listing = require('../models/Listing')
const validator = require("validator")

// make inquiry create new inquiry
exports.create = function(req , res) {
    //create a new inquiry object
    let inquiry = new Inquiry(req.body)    
   
    inquiry.create().then((data)=>{
        res.send(data)
    }).catch((regErrors)=>{
        res.send(regErrors)
    })
}

// Get inquiry by id
exports.getById = function (req, res){
    Inquiry.getById(req.query.listingId).then((inquiryDoc)=>{
        console.log(inquiryDoc)
        res.send(inquiryDoc)
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    })
}

// Get inquiry by id
exports.getByAuthorId = function (req, res){
    console.log('Get by author id function endpoint is called.')
    console.log(req.body.authorId)
    Listing.getByAuthor(req.body.authorId).then(function(listings){
        res.send(listings)
    })
    .catch(function(err){
        res.send(err)
    })
}
