const prompt = require('prompt-sync')()
const colors = require('colors')

console.log('Aferição de Excesso de Velocidade e Cálculo de Multa')

let v = parseFloat(prompt('Insira a velocidade do carro em km/h: '.green))

while (isNaN(v)){
    console.log('Valor inserido é inválido!'.red,'Insira um valor númerico para a velocidade:')
    v = parseFloat(prompt('Insira a velocidade do carro em km/h: '.green))
}

let absv = Math.abs(v)

/* vou utilizar Math.abs para achar o valor absoluto da velocidade, ela pode ser negativa se o móvel
estiver no sentido oposto do referencial */

if(absv>80){
    let multa = (absv-80)*5
    console.log('Limite de Velocidade excedido em',absv-80,'km/h \nMulta de','R$ '.red+multa.toFixed(2).red)
}
else
console.log('Não excedeu o limite de velocidade de 80km/h!')
