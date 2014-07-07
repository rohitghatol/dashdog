var express = require('express'),
    logfmt = require("logfmt"),
    bodyParser = require('body-parser'),
    compress = require('compression'),
    methodOverride = require('method-override');


module.exports = function(app,config){
   //Express Configuration code


   //Make public directory public
   app.use(express.static(__dirname+'/../public'));

   //Compress traffic over http
   app.use(compress());

   //Settings for Restful APIs
   app.use(bodyParser());
   app.use(methodOverride());

   //Logger
   app.use(logfmt.requestLogger());


}
