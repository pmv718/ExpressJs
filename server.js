var express = require('express');
var app = express();
app.get('/', function(request, response) {
	response.send('Hello from Express');
})
app.get("/add", function(request, response) {
	let c = Number(request.query.num1) + Number(request.query.num2);
	response.send(''+c);
})
app.get('/product/:a/:b',function(request, response) {
	let c = (request.params.a) * (request.params.b);
	response.send(''+c);
})
app.get("/message", function(request, response) {
	response.send('Hello from message');
})
app.get("/data",function(request, response) {
	let myObj = {"name":"Amit","age":"26","location":"Bangalore"};
	response.header("Content-Type", "application/json");
	response.send(JSON.stringify(myObj));
})
app.get("/data/js",function(request, response) {
	response.header("Content-Type","application/json");
	let myObj = {"product":"Mobile","price":"12000"};
	response.send(JSON.stringify(myObj));
})
app.listen(8080);
