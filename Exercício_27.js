const prompt = require('prompt-sync')()
const colors = require('colors')

/* vou gerar a matriz 6x6 aleatoriamente com o algoritmo que já usei nas questões anteriores, basta mudar o numLinhas e o numColunas na entrada */

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

matrix1 = criarMatriz(6,6)  /* entrada 6,6 gera a matriz 6 por 6 */


/* parâmetros de entrada são uma matriz e o número n que vai multiplicar cada elemento  */
 function fill(mat1,n){
    var mat2 = []
    for(var a = 0;a<mat1.length;a++){
        for(var b = 0;b<mat1[0].length;b++){
        mat2.push(n*mat1[a][b])  /* com o push eu empurro cada elemento multiplicado por n nesse novo array que eu chamei de mat2 */
        }
    }
    console.log('\nOs elementos da matriz 6x6 multiplicados por '+num+': \n') /* uore */
         console.log(mat2.join(' ')+'\n')  
          
    return mat2
} 

let num = parseInt(prompt('\nDigite um número inteiro para multiplicar todos os elementos da matriz: '.magenta))
while(isNaN(num)){num = parseInt(prompt('Valor Inválido! '.red+'Digite um número inteiro para multiplicar todos os elementos da matriz: '))}

matrix2 = fill(matrix1,num)