/* Implemente um script com declaração de variáveis. Use var, let e const.
Apresente exemplos de códigos em que o uso incorreto dessas declarações irá causar erro. */

//let
let exemploLet = "teste";
exemploLet = "outro teste";
let exemploLet = "outro teste"; //erro. não é necessário declarar a mesma variável novamente.

function testarLet() {
    return exemploLet; //funciona, já que a declaração de let foi global.
}

function testarLet2() {
    let exemploLet2 = "testando mais uma vez";
}

exemploLet2 = "redeclarando";// erro, já que a variável foi declarada dentro da função.

//var
var exemploVar = "teste2";
var exemploVar = "teste2"; //não apresenta erro, pode levar a confusão.

//const
const exemploConst = 3;
exemploConst = 4; //const não pode ser redeclarada.





