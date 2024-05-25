const prompt = require('prompt-sync')()
const colors = require('colors')

console.log('Advinhe o número que o computador escolheu de 1 a 5 \n')

/* escolher o Math.ceil para arrendondar para cima o número que vem do 4 vezes o Math.random.
Assim a gente vai ter um número entre 1 e 5 */

let choice = Math.ceil(5*Math.random())

let guess = parseInt(prompt('Qual o seu palpite? Escolha um número inteiro de 1 a 5 '))

/* Vou precisar adicionar o while pra os casos aonde o usuário inserir valores NaN */

while(isNaN(guess) || guess>5 || guess<1){
    guess = parseInt(prompt('Valor inválido'.red+'. Insira um número inteiro de 1 a 5 '))
}

while(guess!==choice){
    if (guess>choice){
        guess = parseInt(prompt('O número é menor que '+guess+'. Escolha um número entre 1 e '+guess+' '))
        while(isNaN(guess)||guess>5 ||guess<1){
            guess = parseInt(prompt('Valor Inválido'.red+'. Escolha um número entre 1 e 5 '))
        }
        
    }
    if (guess<choice){
        guess = parseInt(prompt('O número é maior que '+guess+'. Escolha um número entre '+guess+' e 5 '))
        while(isNaN(guess)||guess>5 ||guess<1){
            guess = parseInt(prompt('Valor Inválido'.red+'. Escolha um número entre 1 e 5 '))
        
    }
    
}
}
console.log('Parabéns'.green+', você acertou! O número é '+guess)
