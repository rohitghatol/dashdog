// web.js
var express = require("express"),
    config = require('./config/config')[process.env.AppMode||'development'];


var app = express();

// database settings
require('./config/database')(config);

// express settings
require('./config/express')(app,config);

// global routes
require('./config/routes')(app,config);


var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
