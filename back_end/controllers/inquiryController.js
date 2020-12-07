const Inquiry = require('../models/Inquiry')
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
    Inquiry.getById(req.body.listingId).then((inquiryDoc)=>{
        console.log(inquiryDoc)
        res.send(inquiryDoc)
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    })
}

   
