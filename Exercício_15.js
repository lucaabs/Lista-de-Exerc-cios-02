const prompt = require('prompt-sync')()
const colors = require('colors')

/* definir uma função que leve em conta o preenchimento de dois arrays, um para os números inseridos e
outro que registre os números pares e suas posições */

function fillVector(vec,size,vecEven){
    for(i=0;i<size;i++){
    insertNum = parseFloat(prompt('Digite o '+(i+1)+'º número a ser armazenado'))
    while(isNaN(insertNum)){insertNum = parseFloat(prompt('Valor inválido. '.red+'Digite o '+(i+1)+'º número a ser armazenado'))}
    vec.push(insertNum)
    if(insertNum%2 == 0){vecEven.push('na '+(i+1)+'ª posição: '+insertNum)} 
    }
   
}

/* definir os arrays que vão ser entradas das funções um para os nomes e outra para os vetores pares */

let nomes = new Array
let vecPar = new Array
fillVector(nomes,10,vecPar) /* O exercício está pedindo somente 10 numeros então coloco 10 para o size */

console.log('\n Os números inseridos foram \n'.green)
console.log(nomes.join(', '))

console.log('\n Os números pares foram: \n'.magenta)
console.log(vecPar.join('\n'))
