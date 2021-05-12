// importando o módulo express.js
const express = require("express");
// iniciando o express
const app = express();

app.listen(4000, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro");
  } else {
    console.log("Servidor Rodando");
  }
});

app.get("/", function (req, resp) {
  resp.send("<h1>Minha primeira rota atualizada</h1>");
});

app.get("/blog/:artigo?", function (req, resp) {
  var artigo = req.params.artigo;

  if (artigo) {
    resp.send("<h1>Artigo: " + artigo + "</h1>");
  } else {
    resp.send("<h1>Teste de rota para um blog</h1>");
  }
});

app.get("/canal/youtube", function (req, resp) {
  resp.send("<h1>Olá rota para o meu canal no youtube</h1>");
});

//rotas com parâmetros obrigatórios

app.get("/fmpfm/:curso/:disc?", function (req, resp) {
  var curso = req.params.curso;
  var disc = req.params.disc;

  resp.send("<h1>Oi " + curso + " disciplina " + disc + "</h1>");
});
