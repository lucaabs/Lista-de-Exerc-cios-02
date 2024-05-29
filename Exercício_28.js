const prompt = require('prompt-sync')()
const colors = require('colors')

/* vou gerar a matriz 10x10 aleatoriamente com o algoritmo que já usei nas questões anteriores, basta mudar o numLinhas e o numColunas na entrada */
/* lembrando que esse modelo escolhe numeros entre 1 e 9, sem os negativos para cada posição da matriz */

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

matrix1 = criarMatriz(10,10)  /* entrada 10,10 gera a matriz 10 por 10 */

/* agora vamo fazer a função que vai receber essa matriz e calcular a soma dos elementos acima e abaixo da diagonal principal */

function somaElementos(mat1){
    var somaAcima = 0 
    var somaAbaixo = 0
    for(a=0;a<mat1.length;a++){                     /* loop para começar as somas nas linhas */
        for(b=0;b<mat1[a].length;b++){                /* loop para continuar as somas correndo nas colunas */
            if(a<b){
                somaAcima = mat1[a][b] + somaAcima    /* soma dos elementos acima começa com zero e vai se somando com os elementos */
            }
            if(a>b){
                somaAbaixo = mat1[a][b] + somaAbaixo  /* soma dos elementos abaixo começa com zero e vai se somando com os elementos */
            }
        }
    }console.log('\na) A soma dos elementos acima da diagonal principal é: '.yellow+somaAcima)
    console.log('b) A soma dos elementos abaixo da diagonal principal é: '.magenta+somaAbaixo)
}

somaElementos(matrix1)