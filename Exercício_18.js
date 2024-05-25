const prompt = require('prompt-sync')()
const colors = require('colors')

/* const funcionario = {
Nome: 'Andrea',
Cargo: 'Pesquisadora'
Salário: 4000;
} */

console.log('Programa para cadastro de de funcionário: \n'.yellow)

function fill(funcionario,size){

for (i=0; i<size; i=i+1){
        funcionario.push('Nome: '+(prompt('Insira o teu nome: ')))
        funcionario.push('Cargo: '+prompt('Insira o teu cargo: ')) 
        funcionario.push('Salário: R$'+parseInt(prompt('Salário: ')).toFixed(2))
    
    }
}
let cadastro = []

fill(cadastro,1)

console.log('\nFuncionário Cadastrado com Sucesso! \n'.green)
console.log(cadastro.join('; \n'))
