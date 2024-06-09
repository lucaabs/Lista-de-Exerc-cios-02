const prompt = require('prompt-sync')()
const colors = require('colors')

/* vou gerar a matriz 3x3 aleatoriamente com o algoritmo que já usei nas questões anteriores, basta mudar o numLinhas e o numColunas na entrada */
/* vou adicionar agora elementos entre -9 e 9 usando a função Math.random e multiplicando a por um número negativo */

function criarMatriz(numLinhas,numColunas){
    var matrix = []
    var matrixFormat = []
    for(var i = 0;i<numLinhas;i++){
        matrix[i] = []
        matrixFormat[i] = []
        for(var j = 0;j<numColunas;j++){
            matrix[i][j]=Math.floor(10*Math.random())-Math.floor(10*Math.random()) /* esse ultimo termo possibilita os numeros negativos */
            if(matrix[i][j]>=0){
                matrixFormat[i][j]=' '+matrix[i][j]  /* essa matrixFormat vai pegar os valores positivos e adicionar um espaço para os valores negativos e positivos ficarem enfileirados corretamente quando eu executar o console.log */
            } else (matrixFormat[i][j] = matrix[i][j])  /* os valores negativos não tem um espaço adicionado porque já tem o sinal de menos */          
        }
    }
    console.log('\nA matriz '+numLinhas+'x'+numColunas+' aleatória gerada é: \n')
         for(i=0;i<numLinhas;i++){
         console.log(matrixFormat[i].join(' ')) /* exibir a matriz formatada com os espaços adicionais em numeros positivos */
         }
    return matrix
         
}
matrix1 = criarMatriz(3,3)

function mediaElemDiagSec(mat1){
    var soma = 0
    for(i=0;i<mat1.length;i++){
        for(j=0;j<mat1[i].length;j++){
            if((i+j)==(mat1.length-1)){       /* diag secundária sempre tera i+j = mat1.length-1 */
                soma += mat1[i][j]                 /* soma dos elementos da diagonal sec */
            }
        }
    }media = soma/(mat1.length)              /* média  */
    console.log('\nA média dos elementos da diagonal secundária é: '.green+media.toFixed(2)+'\n')
    var mat2 = []                 /* a matriz dois vai ter os novos valores depois do produto */
    for(i=0;i<mat1.length;i++){
        mat2[i]=[]
        for(j=0;j<mat1[i].length;j++){
            if(i==j){mat2[i][j]=(media*mat1[i][j]).toFixed(2)}     /* estou colocando até a segunda casa decimal já que a média pode ser um número decimal */
            else (mat2[i][j]=mat1[i][j])
        }
    }     console.log('A matrix 3x3 com os elementos da diagonal principal multiplicados pela média dos elementos da diagonal secundária é: \n'.magenta)
    for(i=0;i<mat2.length;i++){
        console.log(mat2[i].join('  '))
    }
}

mediaElemDiagSec(matrix1)

