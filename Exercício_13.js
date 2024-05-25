const prompt = require('prompt-sync')()
const colors = require('colors')


function fillSeq (vector,size){

    vector[0]=1 /* São os dois primeiros termos da seq Fib */
    vector[1]=1
    
    for(let i = 2; i<size;i++){
    vector[i] = vector[i-2]+vector[i-1] /* lembrar que os indices de um array começa por 0, por isso coloque os termos i-1 e i-2 */ 
    }
}

let vecFib = [] /* criei uma variável e declarei ela como array vazio e com tamanho indefinido, quando eu adicionar ela a função fillSeq ela
                    ganha o tamanho de 15 e vai ser completada de acordo com a função */

fillSeq(vecFib,15)

console.log('\n Os 15 primeiros termos da sequência Fibonacci são: \n')
console.log(vecFib.join(', '))