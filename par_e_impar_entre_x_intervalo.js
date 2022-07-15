
/* Faça um algoritmo que imprima a soma dos números multiplos de 11 em um intervalo digitado pelo usuário */

var comeco = parseInt(prompt("Digite o começo do intervalo"));
var fim = parseInt(prompt("Digite o fim do intervalo"));
var somaMultiploOnze = 0;

for(var i = comeco; i <= fim; i++)
{
    if(i % 11 == 0)
    {
        somaMultiploOnze = somaMultiploOnze + i;
    }
} console.log("Soma dos múltiplos de 11: " + somaMultiploOnze);

/* Versão com WHILE */

var comeco = parseInt(prompt("Digite o começo do intervalo"));
var fim = parseInt(prompt("Digite o fim do intervalo"));
var somaMultiploOnze = 0;

while(comeco <= fim)
{
    if(comeco % 11 == 0)
    {
        somaMultiploOnze = somaMultiploOnze + comeco;
    } comeco++
} console.log("Soma dos múltiplos de 11: " + somaMultiploOnze);