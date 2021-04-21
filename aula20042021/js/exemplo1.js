function receber(){
    var v1 = parseFloat(document.getElementById("num1").value);
    var v2 = parseFloat(document.getElementById("num2").value);
    var op = document.getElementById("op").value;

    document.write("<h1>Resultado</h1>");
    document.write("<h2>" + calcular(v1,v2,op) + "</h2>");

}

function calcular(v1,v2,op){


    if (op == "+"){
        return eval (`${v1} ${op} ${v2}`);
    }
    else if (op == "-"){
        return eval (`${v1} ${op} ${v2}`);
    }
    else if (op == "*"){
        return eval (`${v1} ${op} ${v2}`);
    }
    else if (op == "/"){
        if (v2 == 0){
            alert("IMPOSSÍVEL CALCULAR - DIVISÃO POR 0");
        }
        else{
            return eval (`${v1} ${op} ${v2}`);
        } 
    }
    else {
        if (v2 == 0){
            alert("IMPOSSÍVEL CALCULAR - DIVISÃO POR 0");
        }
        else{
            return eval (`${v1} ${op} ${v2}`);
        }
    }

}