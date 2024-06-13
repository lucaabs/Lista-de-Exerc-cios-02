const prompt = require('prompt-sync')()
const colors = require('colors')

let inventarioLojaA = {
    camisas: 25,
    camisetas: 13,
    calcas: 20,
    vestidos: 14,
    bones: 15,
    aneis: 3,

}

let inventarioLojaB = {
    camisas: 15,
    calcas: 18,
    bones: 7,
    cintos: 5,
    bolsas: 12,
    brincos: 8,
}

console.log('\nO inventário de itens em cada loja é: \n'.yellow)
console.log('Inventário da Loja A: ')
console.log(inventarioLojaA)
console.log('\nInventário da Loja B: ')
console.log(inventarioLojaB)

let inventarioTotal = {}

function somarInventarios(obj){
    for (variable in obj){
        if(inventarioTotal['Total de '+variable]){
            inventarioTotal['Total de '+variable] = inventarioTotal['Total de '+variable]+obj[variable]
        } else(inventarioTotal['Total de '+variable] = obj[variable])
    }
}

somarInventarios(inventarioLojaA)
somarInventarios(inventarioLojaB)


console.log('\nO inventário TOTAL de itens nas duas lojas é: \n'.magenta)

console.log(inventarioTotal)