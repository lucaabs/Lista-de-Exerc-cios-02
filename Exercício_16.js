const prompt = require('prompt-sync')()
const colors = require('colors')

/* vou usar Math.random para gerar os números aleatórios. Esse método só gera de 0 a 1, excluindo o 1,
logo precisamos multiplicar por 100 e arredondar pra baixo com floor. */

function fill(vector,size){
    for(i=0;i<size;i++)
    vector.push(Math.floor(100*Math.random()))    
}

let num = new Array
fill(num,20)

console.log('\n Foram gerados 20 números aleatórios entre 0 e 99: \n'.yellow)
console.log(num.join(', '))
console.log('\n Os números organizados em ordem crescente ficam: \n'.magenta)
console.log(num.sort().join(', '))