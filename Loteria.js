const prompt = require('prompt-sync')()
const colors = require('colors')

/* criar uma função para gerar 13 dezenas aleatoriamente. As dezenas serão entre 1 e 60 como na mega sena */

function gerarDezenas(){
    var dezenas = []
        while(dezenas.length<6){      /* com essa condição eu garanto que todos terão 13 apostas */
        numero = Math.ceil((60*Math.random()))
        if(!dezenas.includes(numero)){   /* essa condição elimina dezenas repetidas */
            dezenas.push(numero)
        }
    }    
    return dezenas.sort((a, b) => a - b)  /* pelo que vi na internet esse método organiza o array de forma crescente */
}

/* criar objeto com duas características nome: "Apostador num" e o dezenas. Nas dezenas
armazenaremos as 13 dezenas geradas com a função do início do algoritmo*/

let jogadores = []  

for(j=0;j<500000;j++){
    var jogador = []
    jogador.nome = 'Apostador '+(j+1)
    jogador.dezenas = gerarDezenas()
    jogadores.push(jogador)
}

console.log(jogadores)

// Exibir os jogadores e suas dezenas
/* jogadores.forEach(player => {
    console.log(player.nome + ": " + player.dezenas.join(", "));
}) */

/* vamos definir o resultado da loteria */

resultado = gerarDezenas()

console.log('Resultado '+resultado)

let match = 0

for(k=0;k<500000;k++){
    for(l=0;l<6;l++){
    if(resultado.includes(jogadores[k].dezenas[l]))
    {match = 1 + match}
} if(match == 6) {console.log('Vencedor com a aposta número: '+k+1)}
match = 0
}