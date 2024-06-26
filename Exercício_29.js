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

matrix1 = criarMatriz(5,5)  /* entrada 5,5 gera a matriz 5 por 5 */

/* vamos criar a função que encontra os itens pedidos na questão */

function fill(matrix1){
    var somaLinha4 = 0
    var somaCol2 = 0
    var somaDiagPrin = 0
    var SomaTodos = 0
    for(i=0;i<matrix1.length;i++){
        for(j=0;j<matrix1.length;j++){
            SomaTodos = matrix1[i][j] + SomaTodos
            if(i==3){
                somaLinha4 =  matrix1[i][j]+somaLinha4 
            }
            if(j==1){
                somaCol2 = matrix1[i][j]+somaCol2
            }
            if(i==j){
                somaDiagPrin = matrix1[i][j]+somaDiagPrin
            }
                 
        }
        
    }console.log('\na)Soma dos elementos da linha 4: '.yellow+somaLinha4)
    console.log('\nb)Soma dos elementos da coluna 2: '.magenta+somaCol2)
    console.log('\nc)Soma dos elementos da diagonal principal: '.red+somaDiagPrin)
    console.log('\nd)Soma de todos os elementos: '.green+SomaTodos)
}

fill(matrix1)