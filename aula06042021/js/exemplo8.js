function minhaFuncao(selectObject) {
  var qtd = 0;

  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      qtd++;
    }
  }

  return qtd;
}

var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  alert(
    "Total de opções selecionadas: " +
      minhaFuncao(document.selectForm.tipoMusica)
  );
});
