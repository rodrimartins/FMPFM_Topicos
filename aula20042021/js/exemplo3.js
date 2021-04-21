function receber(){
    var v1 =  quadrado(parseInt(document.getElementById("num1").value));
   

    document.write("<h1>Resultado</h1>");
    document.write("<h2>" + v1 + "</h2>");
   
}

//função anônima

//var quadrado = function (numero){
  //  return numero * numero;
//}

// arrow function
var quadrado = (num) => {
    return num * num;
}


