const prompt = require('prompt-sync')()
const colors = require('colors')

let vecA = []

function gerarNumeros(){
    while(vecA.length<100){
        vecA.push((Math.floor(101*Math.random()-101*Math.random()))) /* valores entre -100 e 100 */
        
    }
vecA.sort((a, b) => a - b)  /* organizá-los em ordem crescente */
return vecA
}

gerarNumeros()

console.log(`\nO vetor gerado é:\n\n[${vecA.join(' ')}]\n`)
let vecB = []

function verificarNumeros(){
    for(j=0;j<vecA.length;j++){
        if((vecA[j])>0){  /* se os valores do array forem maiores que zero eles seram excluidos com o slipe para um novo vecB */
            vecB.push(vecA.splice(j,1)) /* splice recebe dois argumentos o indice a ser excluido e o numero de elementos a partir desse indice para serem excluidos, no caso só queremos excluir 1 */
            j=j-1 /* cada vez que excluo um número, o length total reduz, então tenho que compensar reduzindo o j em menos 1 a cada ciclo */
        }
    }
}

verificarNumeros()

console.log('O vetor compactado sem os valores negativos e nulos é: \n')
console.log('['+vecB.join(' ')+'}')