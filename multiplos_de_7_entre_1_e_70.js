
/* Faça um algoritmo que imprima a quantidade de números pares e a quantidade de números ímpares em um intervalo digitado pelo usuário.*/

var comeco = parseInt(prompt("Digite o começo do intervalo"));
var Fim = parseInt(prompt("Digite o fim do intervalo"));
var qtdepares = 0;
var qntdeimpares = 0;

for(var i = comeco; i <= fim; i++){
    if(comeco % 2 == 0){
        ++qtdepares
    } else{
        ++qntdeimpares
    }
} 
console.log("Quantidade de Pares: " + qtdepares + ".");
console.log("Quantidade de Impares: " + qntdeimpares + ".")

/* Versão com WHILE */

var comeco = parseInt(prompt("Digite o começo do intervalo"));
var fim = parseInt(prompt("Digite o fim do intervalo"));
var qtdepares = 0;
var qntdeimpares = 0;

while(comeco <= fim){
    if(comeco % 2 == 0){
        ++qtdepares
    } else{
        ++qntdeimpares
    }
    comeco++
} 
console.log("Quantidade de Pares: " + qtdepares + ".");
console.log("Quantidade de Impares: " + qntdeimpares + ".")