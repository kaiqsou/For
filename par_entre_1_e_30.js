
/* Faça um algoritmo que imprima a quantidade de números multiplos de 7 intervalo entre 1 e 70 (incluindo ambos). */
 
var multiplos = 0;
for (var i= 1; i<= 70; i++){
    if(i % 7 == 0){
        multiplos++
    }
} console.log("Existem: " + multiplos + " múltiplos de 7.");

/* versao com WHILE */
var multiplos = 0;
var i = 1;

while(i <= 70 )
{
    if(i % 7 == 0){
        multiplos++
    }
    i++
} console.log("Existem: " + multiplos + " múltiplos de 7.");