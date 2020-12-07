const inquiryCollection = require('../server/db').db().collection("inquiries")

let Inquiry = function(data){
	this.data = data
	this.errors = []
}

Inquiry.prototype.cleanUp = function() {
    //Check type
    if(typeof(this.data.listingId) != "string"){this.data.listingId= ""}
    if(typeof(this.data.message) != "string"){this.data.message= ""}
    
    //get rid of any bogus properties and trim whitespace
    this.data = {
        listingId: this.data.listingId,
        message: this.data.message
    }
}

Inquiry.prototype.validate = function(){
    return new Promise(async (resolve, reject) => {
        // Add backend validation for security

        //Promise completed
        resolve()
    })
}

// Returns object created on success
Inquiry.prototype.create = function (){
    return new Promise(async (resolve, reject)=> {
        // Clean up and validate data
        this.cleanUp()

        await this.validate()
    
        //Save user to db if no errors
        if (!this.errors.length){            
            await inquiryCollection.insertOne(this.data)
            resolve(this.data)
        }
        else{
            reject(this.errors)
        }
    })
}


Inquiry.getById = function (listingId){
    return new Promise(async (resolve, reject)=> {
        if(typeof(listingId) != "string"){
            reject()
            return
        }        

        // Find all matching documents
        inquiryCollection.find({listingId : listingId}).toArray(function(err, inquiries) {
            if (err) {
                reject(err)
            }
            resolve(inquiries)
        });
    })
}

module.exports = Inquiry