/* Crie um código Javascript que solicite do usuário o seu peso e a sua altura.
Utilizando esses valores, imprima o resultado do cálculo de seu IMC.

IMC = peso (kg) / altura² (m)

Informe também se o IMC é maior ou menor do que 20. */

let peso = parseInt(prompt("Digite o seu peso: "));
let altura = parseFloat(prompt("Digite a sua altura: "));

function calculoImc(peso, altura) {
    return imc = peso / Math.pow(altura, 2);
}

let valorImc = calculoImc(peso, altura).toFixed(2);

alert("O seu IMC é de: " + valorImc);


