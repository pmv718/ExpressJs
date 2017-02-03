var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
extended:true
}))
// app.get('/', function(request, response) {
// 	response.send('Hello from Express');
// })
// app.get("/add", function(request, response) {
// 	let c = Number(request.query.num1) + Number(request.query.num2);
// 	response.send(''+c);
// })
// app.get('/product/:a/:b',function(request, response) {
// 	let c = (request.params.a) * (request.params.b);
// 	response.send(''+c);
// })
// app.get("/message", function(request, response) {
// 	response.send('Hello from message');
// })
// app.get("/data",function(request, response) {
// 	let myObj = {"name":"Amit","age":"26","location":"Bangalore"};
// 	response.header("Content-Type", "application/json");
// 	response.send(JSON.stringify(myObj));
// })
// app.get("/data/js",function(request, response) {
// 	// response.header("Content-Type","application/json");
// 	let myObj = {"product":"Mobile","price":"12000"};
// 	response.send((myObj));
// })
// app.post("/calculate/add", function(request,response){
//  let a = Number(request.body.num1);
//  let b = Number(request.body.num2);
//  let c = a+b;
//   response.send(''+c);
// })
app.post('/add',(req,res)=>{
//res.redirect('https://developers.zomato.com/api/v2.1/locations?query='+req.params.location+'&apikey=f223de3b1ce5762153437e3818321cae');
console.log(req.body);
res.send("Resturant added");
})

app.put('/update',(req,res)=>{
//res.redirect('https://developers.zomato.com/api/v2.1/locations?query='+req.params.location+'&apikey=f223de3b1ce5762153437e3818321cae');
console.log(req.body.id);
console.log(req.body.content);
if(req.body.id ==null)
{
  res.send('Enter valid id');
}
if(input == "")
{
  res.send('Enter the correct id');
}
else {
  res.send('Resturant updated');
}
res.send("Resturant updated");
})

app.delete('/delete',(req,res)=>{
//res.redirect('https://developers.zomato.com/api/v2.1/locations?query='+req.params.location+'&apikey=f223de3b1ce5762153437e3818321cae');
if(req.body.id == undefined || req.body.id == "" )
	res.send("Data is invalid");
else
	res.send("Restuarant added");
})

app.post('/add',(req,res)=>{
//res.redirect('https://developers.zomato.com/api/v2.1/locations?query='+req.params.location+'&apikey=f223de3b1ce5762153437e3818321cae');
console.log(req.body);
res.send("Resturant added");
})
app.listen(8080);
