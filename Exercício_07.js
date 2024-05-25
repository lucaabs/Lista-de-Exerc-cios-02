const prompt = require('prompt-sync')()
const colors = require('colors')

/* Vou tentar fazer essa com o conceito de objetos para utilizar mais essa ferramenta */

const carPop ={
    rent: 90,
    feeUnder100: 0.2,
    feeOver100: 0.1
}

const carLux ={
    rent: 150,
    feeUnder200: 0.3,
    feeOver200: 0.25
}

console.log('Valor final do aluguel do carro \n')


let car = parseInt(prompt('Qual tipo de carro você alugou? Pressione [1] para carro popular ou [2] para carro de luxo '))

/* estrutura para ignorar texto e valores que resultem em null */

while( isNaN(car) || (car !== 1 && car!==2)){
    car = parseInt(prompt('Opção Inválida?'.red+' Pressione 1 para carro popular ou 2 para carro de luxo '))
}

/* Carro tipo 1 vai ser o carPop e carro tipo 2 vai ser o carLux */

let days = parseInt(prompt('O aluguel do carro durou quantos dias? '))
while( isNaN(days) || days <= 0 ){
    days = parseInt(prompt('Opção Inválida?'.red+' Insira um número inteiro de dias '))
}

let space = parseFloat(prompt('Quantos km foram percorridos? '))
while( isNaN(space) || space <= 0 ){
    space = parseInt(prompt('Opção Inválida?'.red+' Insira um valor de quilometragem maior que 0 '))
}

/* Função recuperando os parâmetros dos objetos para calcular o valor final. Vou fazer com uma
estrutura de ifs para enquadrar os diferentes tipos de carros e diferentes quilometragens */

function finalValueCarPop(value){
        if(space<=100){
            return value.rent * days + space*value.feeUnder100
        }
        else{
            return value.rent * days + space*value.feeOver100
        }
}           

function finalValueCarLux(value){
        if(space<=200){
            return value.rent * days + space*value.feeUnder200
        }
        else{
            return value.rent * days + space*value.feeOver200
        }
}
               

if (car==1){
    console.log('O valor final do aluguel do carro popular é R$',finalValueCarPop(carPop).toFixed(2).yellow)
}
else{
    console.log('O valor final do aluguel do carro de luxo é R$',finalValueCarLux(carLux).toFixed(2).yellow)
}
    


