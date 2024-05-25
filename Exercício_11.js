const prompt = require('prompt-sync')()
const colors = require('colors')
let cont = 1 /* contador para etiquetar cada termo */
let sum = 0 /* Definir a soma como igual a 0 no começo */

a1 = parseFloat(prompt('Vamos construir uma Progressão Aritmética (PA) de 10 termos, insira o 1º termo: '))
while(isNaN(a1)){a1=parseFloat(prompt('Valor Inválido'.red+'Insira um número para o 1º termo: '))}

r1 =  parseFloat(prompt('Agora escolhe uma razão para a PA: '))
while(isNaN(r1)){r1=parseFloat(prompt('Valor Inválido'.red+'Insira um número para a razão: '))}

do{
    console.log('Termo a'+cont+' = '+a1)
    sum = sum + a1
    a1+=r1
    cont++
} while (cont<=10)

console.log('\n A soma dos 10 termos dessa PA = '+sum)




