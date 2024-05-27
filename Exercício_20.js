const prompt = require('prompt-sync')()
const colors = require('colors')

/* Para este exerício gerei 80 funcionários aleatórios com o chatGPT para criar o banco de dados
a ser analisado nessa questão */

let choice = 's' /* variável que vai definir se o usário deseja continuar a consultar os dados */

const funcionarios = [
        { matricula: 1, nome: "João Silva", salarioBruto: 3000 },
        { matricula: 2, nome: "Maria Santos", salarioBruto: 3200 },
        { matricula: 3, nome: "Carlos Oliveira", salarioBruto: 3500 },
        { matricula: 4, nome: "Ana Souza", salarioBruto: 3100 },
        { matricula: 5, nome: "Pedro Rocha", salarioBruto: 3300 },
        { matricula: 6, nome: "Juliana Costa", salarioBruto: 3400 },
        { matricula: 7, nome: "Lucas Pereira", salarioBruto: 3200 },
        { matricula: 8, nome: "Mariana Lima", salarioBruto: 3000 },
        { matricula: 9, nome: "Felipe Almeida", salarioBruto: 3100 },
        { matricula: 10, nome: "Laura Fernandes", salarioBruto: 3300 },
        { matricula: 11, nome: "Ricardo Oliveira", salarioBruto: 3200 },
        { matricula: 12, nome: "Camila Martins", salarioBruto: 3100 },
        { matricula: 13, nome: "Gustavo Silva", salarioBruto: 3000 },
        { matricula: 14, nome: "Fernanda Santos", salarioBruto: 3400 },
        { matricula: 15, nome: "Eduardo Souza", salarioBruto: 3200 },
        { matricula: 16, nome: "Amanda Costa", salarioBruto: 3300 },
        { matricula: 17, nome: "Rodrigo Pereira", salarioBruto: 3100 },
        { matricula: 18, nome: "Patrícia Lima", salarioBruto: 3000 },
        { matricula: 19, nome: "Bruno Almeida", salarioBruto: 3200 },
        { matricula: 20, nome: "Vanessa Fernandes", salarioBruto: 3100 },
        { matricula: 21, nome: "Renato Oliveira", salarioBruto: 3000 },
        { matricula: 22, nome: "Débora Santos", salarioBruto: 3100 },
        { matricula: 23, nome: "Rafael Costa", salarioBruto: 3200 },
        { matricula: 24, nome: "Carla Pereira", salarioBruto: 3300 },
        { matricula: 25, nome: "Vinícius Lima", salarioBruto: 3400 },
        { matricula: 26, nome: "Nathalia Almeida", salarioBruto: 3200 },
        { matricula: 27, nome: "Robson Fernandes", salarioBruto: 3100 },
        { matricula: 28, nome: "Sandra Oliveira", salarioBruto: 3000 },
        { matricula: 29, nome: "Felícia Santos", salarioBruto: 3100 },
        { matricula: 30, nome: "Leandro Costa", salarioBruto: 3200 },
        { matricula: 31, nome: "Luiz Oliveira", salarioBruto: 3000 },
        { matricula: 32, nome: "Mônica Santos", salarioBruto: 3100 },
        { matricula: 33, nome: "Fábio Costa", salarioBruto: 3200 },
        { matricula: 34, nome: "Renata Pereira", salarioBruto: 3300 },
        { matricula: 35, nome: "Thiago Lima", salarioBruto: 3400 },
        { matricula: 36, nome: "Natália Almeida", salarioBruto: 3200 },
        { matricula: 37, nome: "Rogério Fernandes", salarioBruto: 3100 },
        { matricula: 38, nome: "Sabrina Oliveira", salarioBruto: 3000 },
        { matricula: 39, nome: "Guilherme Santos", salarioBruto: 3100 },
        { matricula: 40, nome: "Priscila Costa", salarioBruto: 3200 },
        { matricula: 41, nome: "Lucas Oliveira", salarioBruto: 3300 },
        { matricula: 42, nome: "Tatiana Santos", salarioBruto: 3400 },
        { matricula: 43, nome: "Diego Costa", salarioBruto: 3200 },
        { matricula: 44, nome: "Aline Pereira", salarioBruto: 3100 },
        { matricula: 45, nome: "Marcelo Lima", salarioBruto: 3000 },
        { matricula: 46, nome: "Gabriela Almeida", salarioBruto: 3100 },
        { matricula: 47, nome: "Rafael Fernandes", salarioBruto: 3200 },
        { matricula: 48, nome: "Camila Oliveira", salarioBruto: 3300 },
        { matricula: 49, nome: "André Santos", salarioBruto: 3400 },
        { matricula: 50, nome: "Cristina Costa", salarioBruto: 3200 },
        { matricula: 51, nome: "Luciano Pereira", salarioBruto: 3100 },
        { matricula: 52, nome: "Amanda Lima", salarioBruto: 3000 },
        { matricula: 53, nome: "Felipe Almeida", salarioBruto: 3100 },
        { matricula: 54, nome: "Renata Fernandes", salarioBruto: 3200 },
        { matricula: 55, nome: "Douglas Oliveira", salarioBruto: 3300 },
        { matricula: 56, nome: "Jéssica Santos", salarioBruto: 3400 },
        { matricula: 57, nome: "Daniel Costa", salarioBruto: 3200 },
        { matricula: 58, nome: "Carolina Pereira", salarioBruto: 3100 },
        { matricula: 59, nome: "Bruno Lima", salarioBruto: 3000 },
        { matricula: 60, nome: "Fernanda Almeida", salarioBruto: 3100 },
        { matricula: 61, nome: "Rodrigo Fernandes", salarioBruto: 3200 },
        { matricula: 62, nome: "Juliana Oliveira", salarioBruto: 3300 },
        { matricula: 63, nome: "Thiago Santos", salarioBruto: 3400 },
        { matricula: 64, nome: "Vanessa Costa", salarioBruto: 3200 },
        { matricula: 65, nome: "Lucas Pereira", salarioBruto: 3100 },
        { matricula: 66, nome: "Carla Lima", salarioBruto: 3000 },
        { matricula: 67, nome: "Gustavo Almeida", salarioBruto: 3100 },
        { matricula: 68, nome: "Patrícia Fernandes", salarioBruto: 3200 },
        { matricula: 69, nome: "Marcelo Oliveira", salarioBruto: 3300 },
        { matricula: 70, nome: "Renata Costa", salarioBruto: 3400 },
        { matricula: 71, nome: "Luciana Oliveira", salarioBruto: 3000 },
        { matricula: 72, nome: "Roberto Santos", salarioBruto: 3100 },
        { matricula: 73, nome: "Carolina Costa", salarioBruto: 3200 },
        { matricula: 74, nome: "Diego Pereira", salarioBruto: 3300 },
        { matricula: 75, nome: "Isabela Lima", salarioBruto: 3400 },
        { matricula: 76, nome: "Gabriel Almeida", salarioBruto: 3200 },
        { matricula: 77, nome: "Tatiane Fernandes", salarioBruto: 3100 },
        { matricula: 78, nome: "Alexandre Oliveira", salarioBruto: 3000 },
        { matricula: 79, nome: "Renata Santos", salarioBruto: 3100 },
        { matricula: 80, nome: "Daniel Costa", salarioBruto: 3200 }
]

console.log('\nPrograma para consultar folha mensal de pagamento dos funcionários \n')

while(choice == 's'){
let numMat = parseInt(prompt('Insira o número de matrícula do funcionário entre 1 e '+funcionarios.length+': '))
while(isNaN(numMat) || numMat<1 || numMat>80){numMat = parseInt(prompt('Valor Inválido. '.red+'Insira o número de matrícula do funcionário entre 1 e '+funcionarios.length+': '))}

/* para acessar os dados do objetos preciso usar aquelas estruturas que usam os indexes [] e ponto e nome do descritor */

let ded = 0.12*funcionarios[numMat-1].salarioBruto
let salarioLiq = funcionarios[numMat-1].salarioBruto - ded

console.log('\nDados do funcionário selecionado: \n')

console.log('Matrícula: '+funcionarios[numMat-1].matricula)
console.log('Nome: '+funcionarios[numMat-1].nome)
console.log('Salário Bruto: '+funcionarios[numMat-1].salarioBruto)
console.log('Dedução INSS (12%): '+ded)
console.log('Salário Líquido: '+salarioLiq+'\n')

choice = prompt('Deseja consultar um outro funcionário? Digite s para SIM ou n para NÃO: ').toLowerCase()
while((!isNaN(choice)) || (choice!=='s') && (choice!=='n')) {
    choice = prompt('Valor Inválido. '.red+'Para consultar outro funcionário Digite s para SIM ou n para NÃO: ').toLowerCase()
}
}

