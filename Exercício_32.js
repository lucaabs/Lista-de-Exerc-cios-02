const prompt = require('prompt-sync')()
const colors = require('colors')

/* vou gerar a matriz 12x13 aleatoriamente com o algoritmo que já usei nas questões anteriores, basta mudar o numLinhas e o numColunas na entrada */
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
matrix1 = criarMatriz(12,13)

/* vou criar uma função para localizar o maior elemento de cada linha e escrever um array com esses elementos maiores pra depois dividir as linhas
por esses elementos da matrix2 */

function LocalizarMaior(mat1){
    var mat2 = []
    for(i=0;i<mat1.length;i++){
        var maior = mat1[i][0]
        for(j=0;j<mat1[i].length;j++){
            if (mat1[i][j]>=maior){
                maior = mat1[i][j]
                }
        } mat2.push(maior)
    }
      return mat2
}

matrix2 = LocalizarMaior(matrix1)
console.log('\nOs maiores elementos de cada linha são:\n')
console.log(matrix2.join( ' , ').magenta+'\n')
console.log('Dividindo cada linha da matriz 12x13 por seu maior elemento teremos:\n'.green)

/* agora criar a função aonde eu divido cada linha da matrix1 pelos elementos da matrix2. Dentro da função essa é a mat3, eu ainda vou criar
uma mat3Format para formatar os valores e adicionar um espaço vazio se o número for positivo para os números ficaram enfileirados certinho
quando chamar o console.log */

function dividirElementos (mat1){
    var mat3 = []
    var mat3Format = []
    for(i=0;i<mat1.length;i++){
        mat3[i]=[]
        mat3Format[i]=[]
        for(j=0;j<mat1[i].length;j++){
            (mat3[i][j])=((mat1[i][j])/(matrix2[i])).toFixed(2)
            if(mat3[i][j]>=0){mat3Format[i][j]=' '+mat3[i][j]}   /* adicionando o espaço vazio */
            else (mat3Format[i][j]=mat3[i][j])
        }
    }for(i=0;i<mat3Format.length;i++){
        console.log(mat3Format[i].join(' ')) /* exibir a matriz formatada com os espaços adicionais em numeros positivos */
        }
}

dividirElementos(matrix1)