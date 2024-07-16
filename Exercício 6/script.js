/* 
Exercício 6
Neste exercício você deverá:
O valor inicial deve ser 0. Pergunte ao usuário se ele deseja somar ou subtrair o valor atual em 1. Se o usuário responder somar o valor aumentará em 1 e quando o usuário responder subtrair o valor diminuirá em 1;
Pergunte ao usuário 3 vezes a operação e a cada escolha do usuário exiba o total parcial em um alerta.
*/

let valor = 0;

function somarOuSubtrair(pergunta) {
  if (pergunta === "somar") {
    valor++;
  } else if (pergunta === "subtrair") {
    valor--;
  } else {
    alert("Valor inválido.");
  }
  return valor;
}

while (true) {
  pergunta = prompt("Deseja somar ou subtrair?").toLowerCase();
  let totalValor = somarOuSubtrair(pergunta);
  alert("O valor parcial é de: " + totalValor);

  let seguir = prompt("Deseja continuar? Sim / Não.").toLowerCase();
  if (seguir !== "sim") {
    break;
  }
}