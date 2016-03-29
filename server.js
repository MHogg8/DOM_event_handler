var express = require('express'); //JS version of Sinatra. 
var app = express();
var path = require('path'); //utility in node that helps to find paths

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html')); //response to return homepage// send it back to browser
});

app.use(express.static('public'));// static files are things like CSS and Javasript

var server = app.listen(3000, function(){// listens on port 3000
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});