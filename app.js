var express = require('express');
var app = express();

var routes = require("./routes");
app.set('view engine', 'pug');

app.listen(3000, function(){
  console.log("This application is running on localhost:3000");
});
//app.listen(process.env.PORT || 3000);

var path = require('path');
app.use(express.static(path.join(__dirname, 'assets')));

//var projectsJSON = require(__dirname + '/portfolio.json');
//var projects = projectsJSON.projects;

//var authorJSON = require(__dirname + "/author.json");
//var author = authorJSON;

app.get('/', routes.home);
