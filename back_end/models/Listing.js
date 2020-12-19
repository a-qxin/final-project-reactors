const listingCollection = require('../server/db').db().collection("listings")
const ObjectID = require('mongodb').ObjectID
const User = require('./User')
const sanitizeHTML = require('sanitize-html')

let Listing = function(data, userid, requestedPostId){
    this.data = data
    this.userid = userid
    this.errors = []
    this.requestedPostId = requestedPostId
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
    if(typeof(this.data.description) != "string"){this.data.description= ""}
    if(typeof(this.data.status) != "string"){this.data.status= ""}
    if(typeof(this.data.location) != "string"){this.data.location= ""}
    if(typeof(this.data.price) != "string"){this.data.price= ""}

    //get rid of any bogus properties and trim whitespace
    this.data = { 
        author: ObjectID(this.userid),
        title: this.data.title.trim(),
        description: this.data.description,
        status: this.data.status,
        location: this.data.location,
        price: this.data.price,
        createdDate: new Date()
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



Listing.reusableListingQuery = function(uniqueOperations, visitorId) {
    return new Promise(async function (resolve, reject){
        let aggOperations = uniqueOperations.concat([
            {$lookup: {from: "users", localField: "author", foreignField: "_id", as: "authorDocument"}},
            {$project: {
                title: 1,
                description: 1,
                status: 1,
                location: 1,
                price: 1,
                createdDate: 1,
                authorId: "$author",
                author: {$arrayElemAt: ["$authorDocument", 0]}
            }}
        ])

        let listings = await listingCollection.aggregate(aggOperations).toArray()

        //Clean up author property in each listing object
        listings = listings.map((listing)=>{
            listing.isVisitorOwner = listing.authorId.equals(visitorId)
            console.log(listing)
            listing.author = {
                username: listing.author.username,
            }
            return listing
        })

        resolve(listings)
    })
}



Listing.prototype.update = function(){
    return new Promise (async (resolve, reject) => {
        try {
            console.log(this.requestedPostId)
            console.log(this.userid)
            let listing = await Listing.findListingById(this.requestedPostId , this.userid)
            if (listing.isVisitorOwner) {
                // actually update the db
                let status = await this.dbUpdate()
                resolve(status)
            } else {
                reject("Person is not owner of post")
            }
        } catch(err) {
            console.log(err)
        }
    })
}

Listing.prototype.dbUpdate = function () {
    return new Promise(async(resolve, reject)=>{
        this.cleanUp()
        this.validate()

        if(!this.errors.length){
            await listingCollection.findOneAndUpdate({_id: new ObjectID(this.requestedPostId)}, {$set: {title: this.data.title,  description: this.data.description, status: this.data.status, location: this.data.location, price: this.data.price}})
            resolve("success")
        }
        else{
            resolve("failure")
        }
    })
}

Listing.findListingById = function(id, visitorId) {
    return new Promise(async function (resolve, reject){
        if(typeof(id) != "string" || !ObjectID.isValid(id)){
            reject()
            return
        }
        
        let posts = await Listing.reusableListingQuery([
            {$match: {_id: new ObjectID(id)}}
        ], visitorId)

        if(posts.length) {
            resolve(posts[0])
        } else {
            reject()
        }
    })
}

Listing.getByAuthor = function(authorId,visitorId){
    console.log('In get by author function',authorId)
    return Listing.reusableListingQuery([
        {$match: {author: authorId}},
        {$sort: {createdDate: -1}}
    ],visitorId)
}

Listing.getAllListings = function (visitorId){
    return Listing.reusableListingQuery([        
        {$sort: {createdDate: -1}}
    ],visitorId)
}
  
module.exports = Listing