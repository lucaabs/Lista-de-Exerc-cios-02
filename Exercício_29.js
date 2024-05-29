const prompt = require('prompt-sync')()
const colors = require('colors')

/* vou gerar a matriz 5x5 aleatoriamente com o algoritmo que já usei nas questões anteriores, basta mudar o numLinhas e o numColunas na entrada */

function criarMatriz(numLinhas,numColunas){
    var matrix = []
    for(var i = 0;i<numLinhas;i++){
        matrix[i] = []
        for(var j = 0;j<numColunas;j++){
            matrix[i][j]=Math.floor(10*Math.random())            
        }
    }
    console.log('\nA matriz '+numLinhas+'x'+numColunas+' aleatória gerada é: \n')
         for(i=0;i<numLinhas;i++){
         console.log(matrix[i].join(' '))
         }     
    return matrix
         
}

matrix1 = criarMatriz(5,5)  /* entrada 6,6 gera a matriz 6 por 6 */