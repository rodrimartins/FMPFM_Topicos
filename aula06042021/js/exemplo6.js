function calcular() {
  var nome = document.getElementById("nome").value;
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var freq = parseFloat(document.getElementById("freq").value);

  var media = (nota1 + nota2) / 2;

  if (freq >= 75) {
    if (media >= 7) {
      alert("O aluno " + nome + " está aprovado com média: " + media);
    } else if (media >= 4) {
      alert("O aluno " + nome + " está de exame com média: " + media);
    } else {
      alert("O aluno " + nome + " está reprovado com média: " + media);
    }
  } else {
    alert("O aluno " + nome + " está reprovado por frequência: " + freq);
  }
}
