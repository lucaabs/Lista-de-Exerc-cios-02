const prompt = require('prompt-sync')()
const colors = require('colors')

console.log('Preço da Passagem de Ônibus em função da distância \n')

let d = parseFloat(prompt('Qual distância você deseja percorrer em km? '.green))

while (isNaN(d)| d<0){
    d = parseFloat(prompt('Valor inserido é inválido!'.red+' Insira um número inteiro maior que zero:'))
}

if(d<=200){
    price = (0.5)*(d)
}
else price = (0.45)*d

/* Vou arredondar o valor para duas casas decimais e incluir os centavos no price */

console.log('O preço da passagem para o trajeto de '+d+' km, é: '+'R$ '.yellow+price.toFixed(2).yellow)