const prompt = require('prompt-sync')()
const colors = require('colors')
seed1 = 0
seed2 = 1
cont = 1

/* Vou fazer essa definindo as sementes seed1 e seed2 para montar a sequencia de fibonacci. A cada iteração vou
associando novos valores a essas sementes */

console.log('Termos da Sequência Fibonacci \n')

let num = parseInt(prompt('Digite até qual termo você deseja saber a sequência Fibonacci: '))
while(isNaN(num) || num<=0){num = parseInt(prompt('Valor Inválido. '.red+'Digite até qual termo você deseja saber a sequência Fibonacci: '))}

do{ console.log('O '+cont+'º Termo: '+seed2)
    let seq = seed1 + seed2
    seed1 = seed2
    seed2 = seq
    cont++

    

}while(cont <= num)
