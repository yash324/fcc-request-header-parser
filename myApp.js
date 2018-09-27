
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// --> 7)  Mount the Logger middleware here
app.get("/api/whoami/", (req,res,next)=> {

  let h = req.headers;
  res.json({ipaddress: h["x-forwarded-for"].split(",")[0],  language: h["accept-language"], software: h["user-agent"]});
  
});



//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
