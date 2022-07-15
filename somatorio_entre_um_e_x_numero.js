
/* Faça um algoritmo que imprima o somatório de todos os números entre 1 e um valor digitado pelo usuário. 
Por exemplo, se o usuário digitar o número 4, o programa deverá calcular o somatório 1 + 2 + 3 + 4 = 10. */

var fim = parseInt(prompt("digite o fim do intervalo"));
var soma = 0;
for(var i = 1; i <= fim; i++)
{
    soma += i       /* isso é igual a "soma = soma + i" */
}
console.log("Soma total: " + soma)

/* versao com WHILE */
var fim = parseInt(prompt("digite o fim do intervalo"));
var soma = 0;
var i = 1 ;

while(i <= fim)
{
    soma += i       /* isso é igual a "soma = soma + i" */
    i++
}

console.log("Soma total: " + soma)