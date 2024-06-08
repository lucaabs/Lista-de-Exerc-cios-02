const prompt = require('prompt-sync')()
const colors = require('colors')

/* vou gerar a matriz 30x30 aleatoriamente com o algoritmo que já usei nas questões anteriores, basta mudar o numLinhas e o numColunas na entrada */
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

matrix1 = criarMatriz(30,30)  /* entrada 30,30 gera a matriz 30 por 30 */
var matrix2 = [] /* vou criar essa variável pois quero armazenar a saida da matriz da function numa variável para depois formatá-la de uma forma melhor de*/

numero = parseInt(prompt('Digite um número inteiro.'.magenta+' Todos os elementos da matriz iguais a esse número serão removidos: '))

function removerNum(mat1,num){
    var cont = 0
    var mat2 = []
    for(var i=0;i<mat1.length;i++){
        mat2[i]=[]
        for(j=0;j<mat1[i].length;j++){
            if(mat1[i][j]==num){
                cont = cont + 1
                mat2[i][j] = ' '   /* isso vai adicionar espaço vazio quando o elemento for igual ao número escolhido */
            } else (mat2[i][j]=mat1[i][j])
        }
    }
    matrix2 = mat2
    console.log('\nO número de elementos igual a ['+num+'] é '+cont)
    console.log('\nA matriz formada removendo os elementos iguais a ['+num+'] é: \n')
}

removerNum(matrix1,numero)

function FormatarMatrix(mat){
var matFormat = []
for(var x = 0;x<mat.length;x++){
    matFormat[x] = []
    for(var y = 0;y<mat[x].length;y++){
        if(mat[x][y]>=0){
            matFormat[x][y]=' '+mat[x][y]}  /* essa matFormat vai pegar os valores positivos e adicionar um espaço para os valores negativos e positivos ficarem enfileirados corretamente quando eu executar o console.log */
           else (matFormat[x][y] = mat[x][y])  /* os valores negativos não tem um espaço adicionado porque já tem o sinal de menos */          
        } console.log(matFormat[x].join(' '))
    } 
    return matFormat
}

FormatarMatrix(matrix2)