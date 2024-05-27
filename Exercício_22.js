const prompt = require('prompt-sync')()
const colors = require('colors')

/* A questão disse para criar a função para uma quantidade indeterminada de habitantes. */
/* Vamo criar uma biblioteca aleatória desses habitantes num objeto */

let habitante = []
let i = 0
let totalSalario = 0
let totalFilhos = 0
let maiorSal = 0

console.log('\nInformações de salários e número de filhos da população de uma cidade fictícia\n')
console.log('Assuma que o salário máximo dessa cidade é R$ 2000\n'.magenta)

let popTrabalha = parseInt(prompt('Escolha um número de trabalhadores dessa cidade fictícia: '))
while(isNaN(popTrabalha) || popTrabalha<=0)popTrabalha = parseInt(prompt('Valor Inválido! '.red+'Escolha um número de trabalhadores dessa cidade fictícia: '))

for(i==0;i<popTrabalha;i++){       /* vai criar um objeto para cada habitante */
    const income = Math.floor(2001*(Math.random()))  /* Salário será sorteado entre 0 e 1000 reais */
    const numFilhos = Math.floor(6*Math.random())   /* Numero de filhos vai ser sorteado entre 0 e 5 */
    habitante.push({         /* usar push para adicionar os valores de cada objeto dentro de um array */
        hab: (i+1),
        salario: income,
        filhos: numFilhos
    }
    )
    totalSalario = totalSalario+habitante[i].salario
    totalFilhos = totalFilhos+habitante[i].filhos
}
console.log(habitante)
console.log('Total Salarial: '+totalSalario)
console.log('Total de filhos: '+totalFilhos)

let quant = 0 /* para contabilizar o numero de pessoas com salario abaixo de 350 */

function funcao(inputSal,inputNumFilhos){
    mediaSal = inputSal/popTrabalha
    mediaNumFilhos = inputNumFilhos/popTrabalha

    habitante.forEach(item => {
        if (item.salario >= maiorSal){maiorSal=item.salario} /* para mapear o maior salário */
        if (item.salario <= 350){quant = quant +1}   
    });

    percentAte350 = quant/popTrabalha   /* percentual de pessoas que recebem até 350 */

}
funcao(totalSalario,totalFilhos)

console.log('\nA média salarial é de: R$',mediaSal.toFixed(2).yellow)
console.log('\nO número médio de filhos por pessoa é:',mediaNumFilhos.toFixed(1).magenta)
console.log('\nO maior salário dessa cidade é no valor de: R$',maiorSal.toFixed(2).blue)
console.log('\nO percentual de pessoas que recebem até R$ 350,00 é:',percentAte350.toFixed(2).red,'%\n')




