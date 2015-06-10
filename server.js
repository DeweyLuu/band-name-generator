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

var verbs = [
	"sing",
	"jump",
	"eat",
	"cook",
	"shout"
];
var nouns = [
	"dog",
	"cat",
	"penguin",
	"rhino",
	"computer",
	"chips",
	"coffee"
];
//app.get("/", function(req, res){
//	res.send("hello universe!")
//});

app.use(express.static(__dirname + "/app/"));

//app.get("/", function(req, res) {
//	res.sendFile(__dirname + '/app/index.html');
//});

app.get("/", function (req, res){
 var randomIndex = Math.floor(Math.random()*theNames.length);
 res.send(theNames[randomIndex]);
});

app.get('/adjective', function(req, res) {
	var randomIndex = Math.floor(Math.random()*adjectives.length);
	res.json( {word: adjectives[randomIndex]} );
});

app.get('/verb', function(req, res) {
	var randomIndex = Math.floor(Math.random()*verbs.length);
	res.json( {word: verbs[randomIndex]} );
});

app.get('/noun', function(req, res) {
	var randomIndex = Math.floor(Math.random()*nouns.length);
	res.json( {word: nouns[randomIndex]} );
});

app.listen(port, function() {
	console.log('server started on port ' + port + ' son!');
});

