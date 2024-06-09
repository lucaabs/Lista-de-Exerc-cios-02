const prompt = require('prompt-sync')()
const colors = require('colors')

/* vou criar o vetor com 30 valores aleatórios, variando de 0 a 99 */

function criarVetor(num){
    var vetor = []
    for(i=0;i<num;i++){
        vetor.push(Math.floor(100*Math.random()))
    }
    console.log('\nConjunto de 30 valores aleatórios entre 0 e 99: \n'.blue)
        console.log(vetor.join(' ').yellow+'\n')
    return vetor
}

vector = criarVetor(30)

console.log('\nVamos separar esses 30 valores em dois vetores de 5 elementos, um somente com elementos pares e outro somente com elementos ímpares\n\n'.blue)

function separarNumerosPares(vetor1){
    vetorPar = []
      for(i=0;i<vetor1.length;i++){
        elemento = vetor1[i]%2
        if(elemento==0){
            vetorPar.push(vetor1[i])
            if(vetorPar.length>4){console.log('Vetor de 5 elementos com valores pares: '.green+vetorPar.join(' ')+'\nVetor cheio!'.red+' Vamos resetá-lo para preenchê-lo de novo\n') 
                vetorPar.splice(0,5)}
        }
    } console.log('Vetor de 5 elementos com valores pares: '.green+vetorPar.join(' ')+'\n\n')
}

function separarNumerosImpares(vetor1){
    vetorImpar = []
    for(i=0;i<vetor1.length;i++){
        elemento = vetor1[i]%2
       if(elemento!==0){
            vetorImpar.push(vetor1[i])
            if(vetorImpar.length>4){console.log('Vetor de 5 elementos com valores ímpares: '.magenta+vetorImpar.join(' ')+'\nVetor cheio!'.red+' Vamos resetá-lo para preenchê-lo de novo\n') 
                vetorImpar.splice(0,5)}
        }
    }console.log('Vetor de 5 elementos com valores ímpares: '.magenta+vetorImpar.join(' '))  
}

separarNumerosPares(vector)

separarNumerosImpares(vector)

