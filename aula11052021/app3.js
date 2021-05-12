//importando o módulo http
var http = require("http");

http.createServer(function(req,resp){
    resp.end("<h1>Hello World Node.js!!!</h1>");
}).listen(4000);

console.log("Meu servidor está rodando");

