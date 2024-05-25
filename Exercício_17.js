const prompt = require('prompt-sync')()
const colors = require('colors')

let vecNom = new Array
let vecIdade = new Array
let vecMinor = new Array


function fill(nom,idade,size){
    for(i=0;i<size;i++){
    nom[i] = prompt('Digite o nome da '+(i+1)+'ª pessoa: ')    
    while(!isNaN(nom[i])){nom[i] = prompt('Dado Inválido. '.red+'Digite o nome da '+(i+1)+'ª pessoa: ')}
    
    idade[i] = parseInt(prompt('Insira a idade de '+nom[i]+': '))
    while(isNaN(idade[i])){idade[i] = parseInt(prompt('Inválido. '.red+'Insira a idade de '+nom[i]+': '))}
}
}

function listar(nom,idade,minor,size){
    let j=0
    for(i=0;i<size;i++){
    if(idade[i]<18){
        minor[j]=nom[i]
        j++
    }
    }
}


fill(vecNom,vecIdade,3)
listar(vecNom,vecIdade,vecMinor,3)

console.log('\n A lista de pessoas: \n'.yellow)
console.log(vecNom.join(', '))
console.log('\n Suas respectivas idades são: \n'.magenta)
console.log(vecIdade.join(', '))
console.log('\n As pessoas menores de idade são: \n'.green)
console.log(vecMinor.join(', '))