const prompt = require('prompt-sync')()
const colors = require('colors')

const pessoa = [
    {nome: 'Lucas', idade: 33},
    {nome: 'Roberto', idade: 24},
    {nome: 'Maria', idade: 70},
    {nome: 'Fernanda', idade: 31},
    {nome: 'Pedro', idade: 41},
    {nome: 'Tiago', idade: 42},
    {nome: 'Daniel', idade: 43},
    {nome: 'Carla', idade: 76},
    {nome: 'Jorge', idade: 80},
    {nome: 'Rachel', idade: 56},
    {nome: 'Claudia', idade: 58},
    {nome: 'Fausto', idade: 31},
    {nome: 'Priscila', idade: 49},
    {nome: 'Tatiana', idade: 45},
    {nome: 'Samantha', idade: 65},
]

let vecNomes =[]

pessoa.forEach(element => {
    console.log(`A idade de ${element.nome} é ${element.idade}`)
    vecNomes.push(element.nome.toLowerCase())
})

opcao = prompt('Escreva o nome de um dos usuários para adicionar o seu respectivo email: '.magenta).toLowerCase()
while(!vecNomes.includes(opcao)){
    opcao = prompt('Nome Inválido. Escreva um nome válido: ')
}

function adicionarEmail(vec){
    for(i=0;i<pessoa.length;i++){
        if(vecNomes[i]==opcao){
            pessoa[i].email=prompt('Insira o email: ').toLowerCase()
        }
    }
}

adicionarEmail(pessoa)
console.log(pessoa)
