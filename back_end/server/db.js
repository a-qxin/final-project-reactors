const mongodb = require('mongodb')

let connectionString = "mongodb+srv://admin:reactors667@cluster0.vf1ym.mongodb.net/reactors_db?retryWrites=true&w=majority"

//Open connection
mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true} , (err, client)=>{
    //export database connected database
    module.exports = client

    //Start express server after db is connected
    const app = require('./app')
    
    app.listen(5000)
})
