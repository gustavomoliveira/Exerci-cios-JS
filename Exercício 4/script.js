/* Exercício 4
Crie um programa que solicite um texto através de um prompt.
Depois, faça com que a quantidade de caracteres desse texto seja mostrada em um alert.
Exiba também a quantidade de vogais do texto. */

let texto = prompt("Digite sua palavra ou texto: ");

function contaVogais(texto) {
  let contadorVogais = 0
  const vogais = ['a', 'e', 'i', 'o', 'u']

  for (palavras of texto) {
    if (vogais.includes(palavras)) {
      contadorVogais++
    }
  }
  return contadorVogais
}

let resultadoVogais = contaVogais(texto);

alert("O texto digitado possui " + texto.length + " caracteres contendo " + resultadoVogais + " vogais.");