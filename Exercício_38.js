const prompt = require('prompt-sync')()
const colors = require('colors')

/* vou criar elementos aleatórios para esse vetor de 6 posições */

var numeros=[]

function gerarElementos(){
    for(i=0;i<6;i++){
        numeros[i] = Math.floor(101*Math.random())  /* gerar números entre 0 e 100 */
    } return numeros
}

gerarElementos()

numeros.forEach(function callback(value,index) { /* callback que vai dar o valor e o índice */
    console.log(`O ${index+1}º número é: ${value}`)
});

console.log('\nAbaixo temos as operações que podem ser realizadas. Escolha uma opção de 1 a 5'.magenta)
console.log('\n1) Soma dos elementos;\n2) Produto dos elementos;\n3) Média dos elementos;\n4) Ordene os elementos em ordem crescente;\n5) Mostre o vetor;\n'.yellow)

opcao = parseInt(prompt('Opção: '))
while(isNaN(opcao) | opcao>5 | opcao<1)
    {opcao = parseInt(prompt('Opção Inválida!'.red+' Insira um valor entre 1 e 5: '))}

let soma = 0
let produto = 1

switch (opcao) {
    case 1:
        for(i=0;i<numeros.length;i++){
            soma = numeros[i]+soma
        }
        console.log('A soma dos elementos é igual a '+soma)
        break
    case 2:
        for(i=0;i<numeros.length;i++){
            produto = numeros[i]*produto
        }
        console.log('O produto dos elementos é igual a '+produto)
        break
    case 3:
        for(i=0;i<numeros.length;i++){
            soma = numeros[i]+soma
            media = soma/(numeros.length)
        }
        console.log('A média dos elementos é igual a '+media.toFixed(2))
        break
    case 4:
        for(i=0;i<numeros.length;i++){
            numeros.sort((a, b) => a - b)
        }
        console.log('Os elementos ordenados em ordem crescente são: '+numeros.join(', '))
        break
    case 5:
        console.log('O vetor gerado foi: '+'['+numeros.join('  ')+']')
        break
}
