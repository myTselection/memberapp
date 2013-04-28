
/**
 * Module dependencies.
 */

var express = require('express');
var app = express();

// Configuration
app.configure(function(){
    app.use("/", express.static(__dirname + '/'));
});

app.get('/', function(req, res){
    res.sendfile(__dirname + '/index.html');
});


var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log("Express server listening on port %d");
});
