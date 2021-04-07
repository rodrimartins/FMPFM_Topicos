function calcular(){
    var nota1 =  parseFloat(document.getElementById('nota1').value);
    var nota2 =  parseFloat(document.getElementById('nota2').value);

    var media = (nota1 + nota2) / 2;

    if (media >= 7){

        alert("O aluno está aprovado com média: "+ media);

    }
    else{

        alert("O aluno está reprovado com média: "+ media);
    }

}