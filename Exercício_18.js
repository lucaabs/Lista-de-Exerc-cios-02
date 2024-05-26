const prompt = require('prompt-sync')()
const colors = require('colors')

console.log('Programa para cadastro de de funcionário: \n'.yellow)

/* Definirei o size, como o programa ta pedindo só pra um funcionário, quando eu chamar o array eu coloco ele = 1 */

function fill(funcionario,size){

for (i=0; i<size; i=i+1){
        
        nome = prompt('Insira o teu nome: ')
        while(!isNaN(nome)){nome = prompt('Valor Inválido! '.red+'Insira o teu nome: ')}
        funcionario.push('Nome: '+nome)
    
        cargo = prompt('Insira o teu cargo: ')
        while(!isNaN(cargo)){cargo = prompt('Valor Inválido! '.red+'Insira o teu cargo: ')}
        funcionario.push('Cargo: '+cargo) 
        
        salario = parseFloat(prompt('Salário: '))
        while(isNaN(salario)){salario = parseFloat(prompt('Valor Inválido! '.red+'Insira o teu salário: '))}
        funcionario.push('Salário: R$'+salario.toFixed(2))
    
    }
}
let cadastro = []

fill(cadastro,1)

console.log('\nFuncionário Cadastrado com Sucesso! \n'.green)
console.log(cadastro.join('; \n'))
