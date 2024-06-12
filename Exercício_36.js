const prompt = require('prompt-sync')()
const colors = require('colors')

/* Eu procurei o que é uma loteria esportiva. Acredito que seja uma cartela com 13 jogos aonde vocês
tenta advinhar qual dos 2 times ganha ou se é empate. Vou definir que 0 é empate, 1 é se o primeiro
time ganha e 2 é se o segundo time ganha. Sendo assim vou gerar unidades entre 0 e 2 para pode pôr
nas apostas para cada um dos 100 jogadores. Estarão escrita na ordem dos jogos, então index 0 do
array unidades tem o resultado do primeiro jogo, index 1 o resultado do segundo etc  */

function geradorDeUnidades(){
    var unidades = []
    while(unidades.length<13){
        unidade = Math.floor(3*Math.random())
        unidades.push(unidade)
    }return unidades
} 

console.log(geradorDeUnidades())

/* Agora vou gerar as cartelas para cada um dos 100 apostadores. Para cada teremos 13 unidades que
correspondem aos resultados de cada jogo. */

let apostadores = []
for(i=0;i<100;i++){
    let apostador = []
    apostador.nome = 'Apostador '+(i+1)
    apostador.unidades = geradorDeUnidades()
    apostadores.push(apostador)
}

apostadores.forEach(player => {
    console.log(player.nome+': '+player.unidades)
});

gabarito = geradorDeUnidades()
console.log('\nGabarito: '+gabarito)

let match = 0
let ganhador = false

for(j=0;j<100;j++){
    for(k=0;k<13;k++){
        if(apostadores[j].unidades[k]==gabarito[k]){
            match = match + 1
            }
        if (match == 13) {
            ganhador = true
            console.log('Parabéns, o Apostador '+(j+1)+' foi o GANHADOR!'.green)
            match = 0        
        }    
    } match = 0
}
if(!ganhador){console.log('Não houve ganhador'.red)}

/* é muito dificil acertar os 13 jogos, eu só consegui resultado quando aumentai o numero de
apostadores para 10000 pessoas. Depois de algumas iterações aparece algum ganhador, outra possibilidade
é diminuir o numero de acertos pra 7 ou 8, ai começam a aparecer Ganhadores */