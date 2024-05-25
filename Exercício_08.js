const prompt = require('prompt-sync')()
const colors = require('colors')

console.log('Programa de Vida Saudável \n')

let hour = parseFloat(prompt('Quantas horas de atividade física você fez este mês? '))

while(isNaN(hour) || hour<0)
    hour = parseFloat(prompt('Valor Inválido'.red+ ' Insira um número de horas maior o igual a zero? '))

function pontos(value){
    if(value<=10){
        return 2*value
    }
    if(value>10 && value <=20){
        return 5*value
    }
    if (value>20){
        return 10*value}
}

cashback = pontos(hour)*0.05

console.log('Você acumulou', pontos(hour),'pontos esse mês')
console.log('Com o sistema de pontos você conseguiu ganhar R$',cashback.toFixed(2).yellow)

