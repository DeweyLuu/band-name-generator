var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var quotes = [
 "I have not failed. I've just found 10,000"+
 "ways that won't work. - Thomas Edison.",
 "No matter where you go, there you are. ",
 "If it is a good idea, go ahead and do it. It" +
"is much easier to apologize than to get"+
"permission. - Rear Admiral Grace Hopper, USN,"+
"Ph.D"
];

app.listen(port, function() {
	console.log('server started on port ' + port);
});

//app.get("/", function(req, res){
//	res.send("hello universe!")
//});
app.get("/", function (req, res){
 var randomIndex =
Math.floor(Math.random()*quotes.length);
 res.send(quotes[randomIndex]);
});


