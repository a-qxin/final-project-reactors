const listingCollection = require('../db').db().collection("listings")
const validator = require("validator")
const bcrypt = require('bcryptjs')
const md5 = require('md5')

let Listing = function(data){
	this.data
	this.errors = []
}


Listing.prototype.validate = function(){
    return new Promise(async (resolve, reject) => {
        
        setTimeout(() => {
            resolve()
        }, 3000);
        //Promise completed
    })
}

Listing.prototype.cleanUp = function() {
    //Check type
    if(typeof(this.data.title) != "string"){this.data.title= ""}
    if(typeof(this.data.category) != "string"){this.data.category= ""}
    if(typeof(this.data.description) != "string"){this.data.description= ""}
    if(typeof(this.data.price) != "number"){this.data.price= ""}

    //get rid of any bogus properties and trim whitespace
    this.data = { 
        title: this.data.tile.trim(),
        category: this.data.category.trim().toLowerCase(),
        description: this.data.password,
		price: this.data.price
    }
}

Listing.prototype.create = function (){

    return new Promise(async (resolve, reject)=> {
        //Validate data
        this.cleanUp()
        await this.validate()
    
        //Save listing if no errors
        if (!this.errors.length){           
            await listingCollection.insertOne(this.data)
            resolve()
        }
        else{
            reject(this.errors)
        }
    })
}

// Listing.prototype.delete = function() {
//   return new Promise((resolve, reject)=>{
      
//       listingCollection.findOne({id: this.data.id}).then((attemptedListing)=>{
//           //Check if user name was found and password is a match
//           if(attemptedListing && bcrypt.compareSync(this.data.id, attemptedListing.id){
//               this.data= attemptedListing
//               // this.getAvatar()
//               resolve("Item has been deleted.")
//           }
//       }).catch(()=>{
//           reject("Please try again later.")
//       })
//   })
// }

// Listing.prototype.edit = function() {
//   return new Promise((resolve, reject)=>{
      
//       listingCollection.findOne({id: this.data.id}).then((attemptedListing)=>{
//           //Check if user name was found and password is a match
//           if(attemptedListing && bcrypt.compareSync(this.data.id, attemptedListing.id){
//               this.data= attemptedListing
//               // this.getAvatar()
//               resolve("Item has been deleted.")
//           }
//       }).catch(()=>{
//           reject("Please try again later.")
//       })
//   })
// }

Listing.getById = function(id){
  return new Promise(function(resolve, reject){
      if(typeof(id) != "string"){
          reject()
          return
      } 
      listingCollection.findOne({id: _id}).then(function(idDoc){
          if(idDoc){
              //clean user doc for security
              idDoc = new Listing(idDoc, true)
              idDoc = {
                  _id: idDoc.data._id,
                  title: idDoc.data.title,
                  category: idDoc.data.category,
                  description: idDoc.data.description,
                  price: idDoc.data.price,
              }
              resolve(userDoc)
          } else {
              reject()
          }
      }).catch(function(){
          reject()
      })
  })
}
        
