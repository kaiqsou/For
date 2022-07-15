
/* Faça um algoritmo que imprima todos os números ímpares no intervalo entre 1 e 30 (incluindo ambos) */

for(var i = 1 ; i <= 30; i++){
    if(i % 2 != 0){
        console.log("Impar: " + i);
    }
}
/* Versão com WHILE */
var i = 1;

while(i <= 30){
    if(i % 2 != 0){
        console.log("Impar: " + i);
    }
    i++
}