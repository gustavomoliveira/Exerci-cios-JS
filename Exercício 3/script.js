/* 
Exercício 03
if é uma estrutura condicional que executa o código dentro do bloco
caso a condição seja verdadeira. Se for falsa, executa o código dentro de else.
O código desse exercício está incorreto e exibe uma mensagem de erro.
Corrija o código do arquivo script.js para que ele utilize corretamente a declaração de variáveis com let e var.
*/

//Modelo inicial

if (a == 5) {
    var b = 2;
    let aux = a + b;
    console.log(aux);
  } else {
    let aux = 6;
    console.log("aux " + aux);
  }
  b = 3;
  var c = b;
  console.log(c);

//Resolução

let a = 5; //"if". qualquer outro número para "else".
var b; // inicializa o "var".

if (a == 5) {
    b = 2; //"var" removido.
    let aux = a + b;
    console.log(aux);
  } else {
    let aux = 6;
    console.log("aux " + aux);
  }
  b = 3;
  var c = b;
  console.log(c);
  