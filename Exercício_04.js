const prompt = require('prompt-sync')()
const colors = require('colors')

/* mais uma vez vou usar o while para remover valores errados NaN, negativos ou nulos */

console.log('Programa para saber se 3 segmentos de reta formam um triângulo \n')

let s1 = parseFloat(prompt('Insira o valor do 1º segmento de reta '.green))
while(isNaN(s1) | s1 <=0){
    console.log('Valor inválido.'.red+' Por favor, insira um número maior que zero')
    s1 = parseFloat(prompt('Insira o valor do 1º segmento de reta '.green))
}

let s2 = parseFloat(prompt('Insira o valor do 2º segmento de reta '.blue))
while(isNaN(s2) | s2 <=0){
    console.log('Valor inválido.'.red+' Por favor, insira um número maior que zero')
    s2 = parseFloat(prompt('Insira o valor do 2º segmento de reta '.blue))
}

let s3 = parseFloat(prompt('Insira o valor do 3º segmento de reta '.yellow))
while(isNaN(s3) | s3 <=0){
    console.log('Valor inválido.'.red+' Por favor, insira um número maior que zero')
    s3 = parseFloat(prompt('Insira o valor do 3º segmento de reta '.yellow))
}

/* a codição de existência de um triângulo é dada quando qualquer dois seus
lados for menor que a soma dos outros dois lados, associar isso ao if */

if(s1<+s2+s3 && s2<s1+s3 && s3<s1+s2 )
    console.log('Os segmentos '+s1+', '+s2+' e '+s3+' formam um triângulo!')
else console.log('Não é possível formar um triângulo com os segmentos '+s1+', '+s2+' e '+s3+'.')