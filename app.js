var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", function(req, res){
	res.render("homepage");
});

app.get("/results", function(req, res){
	var search = req.query.movietitle;
	request("http://www.omdbapi.com/?apikey=thewdb&s="+ search +"&plot=full", function(error, response, body){
		if(!error && response.statusCode == 200){
			var parsedBody = JSON.parse(body);
			res.render("resultpage", {body : parsedBody});
		}
	});
});

app.listen(3000, function(){
	console.log("Movie App has Started !");
});