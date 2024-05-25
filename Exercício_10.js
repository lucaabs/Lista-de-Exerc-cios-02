const prompt = require('prompt-sync')()
const colors = require('colors')


let follow 
let cont = 1
let numberEven = 0

console.log('\n Insira números para saber os seguintes resultados sobre eles: \n \n a) O somatório entre todos os valores \n b) Qual foi o menor valor digitado \n c) A média entre todos os valores \n d)Quantos valores são pares \n')
let num = parseFloat(prompt('Insira o '+cont+'º número: '))
while(isNaN(num)){
    num = parseFloat(prompt('Valor Inválido!'.red+'Insira o '+cont+'º número: '))
}
/* Antes de usar o while...do vou fazer a primeira iteração separada para garantir que se o usuário 
fornecer somente um número, já seja possivel obter a soma, a média, o menor e o número de pares  */

/* até porque o menor numero e a quantidade de números pares precisa de uma base para comparação */

/* mais uma vez eu utilizo o while pra garantir que os valores inseridos nos prompts não sejam invalidos */

let sum = num
let average = num
let smallest = num
let numBefore = num
cont++

if(num%2==0){
    numberEven++
}

let choice = (prompt('Deseja adicionar outro número? Digite S para sim e N para não: ').toUpperCase())
while(choice!=="S" && choice!=="N"){
    choice = (prompt('Inválido! '.red+'Deseja adicionar outro número? Digite S para sim ou N para não: ').toUpperCase())
}
if(choice =="S"){
    do{    
        if(numBefore<=num){smallest=numBefore}
        if(numBefore>num){smallest=num}
        num = parseFloat(prompt('Insira o '+cont+'º número: '))
        while(isNaN(num)){
            num = parseFloat(prompt('Valor Inválido!'.red+'Insira o '+cont+'º número: '))
        }
        sum = sum + num
        average = sum/cont
        if(num%2==0){
            numberEven++
        }
        let choice = (prompt('Deseja adicionar outro número? Digite S para sim e N para não: ').toUpperCase())
        while(choice!=="S" && choice!=="N"){
            choice = (prompt('Inválido! '.red+'Deseja adicionar outro número? Digite S para sim ou N para não: ').toUpperCase())
        }
        if(choice == "S"){
            follow = true
            cont++
        }
        
        if (choice == "N"){follow = false
        }
    
     
    } while (follow)
}
if(choice == "N"){}


console.log('\n a) O somatório entre todos os valores é: '.yellow+sum)
console.log('\n b) O menor valor digitado é: '.magenta+smallest)
console.log('\n c) A média entre todos os valores é: '.green+average.toFixed(2))
console.log('\n d) Quantidade de valores pares é: '.blue+numberEven)