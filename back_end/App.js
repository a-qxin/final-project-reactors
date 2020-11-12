const express = require("express");
const app = express();

// middlewares are added with use. It means for all routes add a plugin
app.use(express.json()); // middleware - to parse body as json

// random endpoint handling
app.get('*',(req,res)=>{
    res.send("Hello to our new site Reactors")
  });


module.exports = app;


app.listen(5000);