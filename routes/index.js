var authorJSON = require('../author.json');
var projectsJSON = require('../portfolio.json');

var projects = projectsJSON.projects;
var author = authorJSON;

exports.home = function(req, res){
    res.render('home',
      {
        title : "thiwwy design",
        author : author,
        projects : projects
      }
    );
};
