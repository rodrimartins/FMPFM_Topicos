function calcular(){

  var num = parseInt(document.getElementById('numero').value);
  var i = 1;

  do{

    //template string
    document.write(` ${i} X ${num} = ${i*num}`);
    document.write("<br>");
    i++;

  }
while (i<11);

}