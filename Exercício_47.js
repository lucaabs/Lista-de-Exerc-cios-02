const prompt = require('prompt-sync')()
const colors = require('colors')

/* vou criar um algortimo simples pra reconhecer se o valor de uma propriedades é string ou número */

objeto ={
    nome: 'Lucas',
    sobrenome: 'Santana',
    idade: 33,
    emprego: 'professor',
    numeroPreferido: 3,
    registro: 623
}

let objNovo = {}
let i = 0

console.log('\nO objeto criado foi: \n'.yellow)
console.log(objeto)


function verificarNatureza(obj){    /* função que vai verificar a natureza de cada uma das propriedades do obj */
    for(elemento in obj){
        i = i+1
        if(!isNaN(obj[elemento])){
        objNovo['propriedade '+i]='é um número'
        } else (objNovo['propriedade '+i] = 'é string')
    }
}

verificarNatureza(objeto)


console.log('\nVamos verificar a natureza de cada uma das propriedades, ou seja, se é string ou se é número\n'.magenta)

console.log(objNovo)