var express = require('express');
var app = express();
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User";
document.body.innerHTML = greeter(user);

app.get('/', function(req, res){
    res.send('Hello express!');
});
app.listen(3000, function() {
    console.log('Listening on port 3000...');
});
var msg = 'hello world';
console.log(msg);
   // var http = require('http');
   // http.createServer(function(request, response) {
   // response.writeHead(200);
    //response.write("Hello, this is dog.");
   // response.end();
   // }).listen(3000);
//console.log('Listening on port 3000...');