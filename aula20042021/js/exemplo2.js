function receber(){
    var v1 =  funcao2(parseInt(document.getElementById("num1").value));
   

    document.write("<h1>Resultado</h1>");
    document.write("<h2>" + v1(10) + "</h2>");
    document.write("<h2>" + funcao2(100)(200) + "</h2>");

}

function funcao1(){
    var obj = {
        nome: "Rodrigo",
        sobrenome: "Martins"
    };

    document.write("<h1>Resultado</h1>");
    document.write("<h2>"+ obj.nome +"</h2>");
    document.write("<h2>"+ obj.sobrenome +"</h2>");

}

function funcao2(v1){
    return function(y){
        return v1 + y;
    }

}
