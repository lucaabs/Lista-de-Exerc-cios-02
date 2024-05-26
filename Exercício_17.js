const prompt = require('prompt-sync')()
const colors = require('colors')

/* começar definindo os vetores que eu vou adicionar as funções */

let vecNom = new Array
let vecIdade = new Array
let vecMinor = new Array


function fill(nom,idade,size){                  /* função para prencher as matrizes com as entradas dos prompts */
    for(i=0;i<size;i++){
    nom[i] = prompt('Digite o nome da '+(i+1)+'ª pessoa: ')    
    while(!isNaN(nom[i])){nom[i] = prompt('Dado Inválido. '.red+'Digite o nome da '+(i+1)+'ª pessoa: ')}   /* estruturas para evitar valores inválidos */
    
    idade[i] = parseInt(prompt('Insira a idade de '+nom[i]+': '))
    while(isNaN(idade[i])){idade[i] = parseInt(prompt('Inválido. '.red+'Insira a idade de '+nom[i]+': '))}  /* estruturas para evitar valores inválidos */
}
}

function listar(nom,idade,minor,size){
    let j=0                  /* criei esse novo indice para preencher os elementos do array resultante que vai dar os nomes dos menores */
    for(i=0;i<size;i++){
    if(idade[i]<18){
        minor[j]=nom[i]
        j++
    }
    }
}


fill(vecNom,vecIdade,9)
listar(vecNom,vecIdade,vecMinor,9)

console.log('\n A lista de pessoas: \n'.yellow)
console.log(vecNom.join(', '))
console.log('\n Suas respectivas idades são: \n'.magenta)
console.log(vecIdade.join(', '))
console.log('\n As pessoas menores de idade são: \n'.green)
console.log(vecMinor.join(', '))