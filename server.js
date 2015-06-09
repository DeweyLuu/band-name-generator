var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

/*var quotes = [
 "I have not failed. I've just found 10,000"+
 "ways that won't work. - Thomas Edison.",
 "No matter where you go, there you are. ",
 "If it is a good idea, go ahead and do it. It" +
"is much easier to apologize than to get"+
"permission. - Rear Admiral Grace Hopper, USN,"+
"Ph.D"
];*/

var theNames = [
	"mentos",
	"skittles",
	"mamba",
	"sour patch kids",
	"haribo"
];

var adjectives = [
	"super",
	"crazy",
	"magnificent",
	"extraordinary",
	"imaginary"
];

//app.get("/", function(req, res){
//	res.send("hello universe!")
//});
app.get("/", function (req, res){
 var randomIndex =
Math.floor(Math.random()*theNames.length);
 res.send(theNames[randomIndex]);
});

app.get('/adjective', function(req, res) {
	var randomIndex = Math.floor(Math.random()*adjectives.length);
	res.json( {word: adjectives[randomIndex]} );
});

app.listen(port, function() {
	console.log('server started on port ' + port + ' son!');
});
//app.use(express.static(__dirname + "/app/"));

//app.get("/", function(req, res) {
//	res.sendFile()
//})
