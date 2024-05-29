const prompt = require('prompt-sync')()
const colors = require('colors')

/* vou gerar a matriz 5x5 aleatoriamente com o algoritmo que já usei nas questões anteriores, basta mudar o numLinhas e o numColunas na entrada */
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
            } else matrixFormat[i][j] = matrix[i][j]  /* os valores negativos não tem um espaço adicionado porque já tem o sinal de menos */          
        }
    }
    console.log('\nA matriz '+numLinhas+'x'+numColunas+' aleatória gerada é: \n')
         for(i=0;i<numLinhas;i++){
         console.log(matrixFormat[i].join(' ')) /* exibir a matriz formatada com os espaços adicionais em numeros positivos */
         }
    return matrix
         
}

matrix1 = criarMatriz(30,30)  /* entrada 30,30 gera a matriz 30 por 30 */