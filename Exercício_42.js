const prompt = require('prompt-sync')()
const colors = require('colors')

/* vou utilizar a lista da questão passada e adicioanar as dezenas para ter as três propriedades
uma com string, outra com numero e outra com idade  */

const pessoa = [
    {nome: 'Lucas', idade: 33, coresFavoritas: ['azul','verde']},
    {nome: 'Roberto', idade: 24, coresFavoritas: ['preto','branco']},
    {nome: 'Maria', idade: 70, coresFavoritas: ['azul','amarelo']},
    {nome: 'Fernanda', idade: 31, coresFavoritas: ['roxo','verde']},
    {nome: 'Pedro', idade: 41, coresFavoritas: ['cinza','verde']},
    {nome: 'Tiago', idade: 42, coresFavoritas: ['magenta','verde']},
    {nome: 'Daniel', idade: 43, coresFavoritas: ['rosa','vermelho']},
    {nome: 'Carla', idade: 76, coresFavoritas: ['azul','vermelho']},
    {nome: 'Jorge', idade: 80, coresFavoritas: ['violeta','amarelo']},
    {nome: 'Rachel', idade: 56, coresFavoritas: ['prata','dourado']},
    {nome: 'Claudia', idade: 58, coresFavoritas: ['verde','azul']},
    {nome: 'Fausto', idade: 31, coresFavoritas: ['laranja','vermelho']},
    {nome: 'Priscila', idade: 49, coresFavoritas: ['rosa','vermelho']},
    {nome: 'Tatiana', idade: 45, coresFavoritas: ['azul','amarelo']},
    {nome: 'Samantha', idade: 65, coresFavoritas: ['marrom','preto']},
]

function gerarDezenas(){
    var dezenas = []
        while(dezenas.length<5){      /* com essa condição eu garanto que todos terão 5 dezenas */
        numero = Math.ceil((10*Math.random())) 
        if(!dezenas.includes(numero)){   /* essa condição elimina dezenas repetidas */
            dezenas.push(numero)
        }
    }    
    return dezenas.sort((a, b) => a - b)  /* pelo que vi na internet esse método organiza o array de forma crescente */
}

for(i=0;i<pessoa.length;i++){
    pessoa[i].aposta = gerarDezenas()   /* gerar 5 dezenas entre 0 e 10 para cada pessoa */
}

console.log(pessoa)

var newObject =[]  /* novo objeto que registrará somente os itens dentro das propriedades que contem arrays */

for (const valor in pessoa){     /* eu tenho objetos dentro de objetos então preciso fazer o for in duas vezes com duas variaveis: valor primeiro e variable depois */
    for(const variable in pessoa[valor]){
        if(Array.isArray(pessoa[valor][variable])){
            newObject.push(pessoa[valor][variable])
        }
    }
}

console.log(newObject)  /* tenho dois objetos dento do objeto principal que possuem propriedades com arrays, as coresfavoritas e as apostas  */