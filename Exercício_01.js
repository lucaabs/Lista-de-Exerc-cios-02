const prompt = require('prompt-sync')()
const colors = require('colors')

/* 10 minutos por cigarro, para converter para dias basta dividir por 60 e depois por 24 */
/* Um ano tem aproximadamente 262.25 dias */
/* Usando o pack colors pra inserir cor nas mensagens */

console.log('Cálculo de Redução de Tempo de vida de um fumante \n')

/* Vou usar o while para o caso do usuário inserir números negativos ou strings como entrada */

let nD = parseInt(prompt('Insira a quantidade de cigarros fumados por dia: '.green))
while(isNaN(nD) | nD<0) {
    console.log('Valor inválido!'.red,'Deve ser um valor inteiro maior que zero')
    nD = parseInt(prompt('Insira a quantidade de cigarros fumados por dia: '.green))
    
}

let nA = parseFloat(prompt('Você fuma há quantos anos? '))
while (isNaN(nA) | nA<0) {
    console.log('Valor inválido'.red, 'Deve ser um valor maior que zero')
    nA = parseFloat(prompt('Você fuma há quantos anos? '))
}


let redu = (10/(60*24))*nD*nA*(365.25)

if (isNaN(redu)) {
    console.log('Foram inseridos valores inválidos')
}
else

console.log('Você já perdeu',Math.round(redu),'dias de vida')
