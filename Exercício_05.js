const prompt = require('prompt-sync')()
const colors = require('colors')

console.log('Jogo: Pedra, papel ou tesoura \n')

let moove = (prompt('Qual a tua jogada?'+'  pedra'.magenta+'  papel'.blue+'  tesoura  '.yellow)).toLowerCase()

/* coloquei o .toLowerCase para caso o usuário escreve a palavra com letra maiuscula */

while(moove.toLowerCase()!=="pedra" && moove.toLowerCase()!=="papel" && moove.toLowerCase()!=="tesoura"){
    console.log( 'Jogada Inválida!'.red+' Por favor, escreva:')
    moove = (prompt('pedra'.magenta+'  papel'.blue+'  tesoura  '.yellow))
}

/* precisamos de um boot pra jogar contra o humano. Ele vai precisar sortear
um valor entre pedra, papel e tesoura. Vamos usar a função Math.Random que sorteia
um número entre 0 e 1 (excluindo o 1) com vírgula. Só que vamos multiplicar pelo 
tamanho (lenght) do nosso array que no caso é 3. 
Então vai variar de 0 a 3, excluindo 3. Vamos usar o Math.floor para arrendondar 
esse número para baixo, ou seja, os unicos indexes possível de serem escolhidos 
são o 0, 1 e 2. */

let boot = ['pedra','papel','tesoura']
let bootPlay = boot[(Math.floor(Math.random()*boot.length))]


console.log('Você jogou '+moove+' e o computador jogou '+bootPlay)

if(moove === bootPlay){
    console.log('Temos um empate!'.magenta)
}
if(moove === "pedra"){
    if(bootPlay === "papel"){
    console.log('Você perdeu.'.red) 
    }
    if(bootPlay === "tesoura"){
    console.log('Você venceu!'.green)    
    }
}
if(moove === "papel"){
    if(bootPlay === "pedra"){
    console.log('Você venceu!'.green)
    }
    if(bootPlay === "tesoura"){
    console.log('Você perdeu.'.red)
    }
}
if(moove === "tesoura"){
    if(bootPlay === "pedra"){
    console.log('Você perdeu.'.red)
    }
    if(bootPlay === "papel"){
    console.log('Você venceu!'.green)
    }
}
