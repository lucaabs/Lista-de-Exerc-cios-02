const prompt = require('prompt-sync')()
const colors = require('colors')

/* vou gerar as duas matrizes aleatoriamente */

function fill(numLinhas,numColunas){
    var matrix = []
    for(var i = 0;i<numLinhas;i++){
        matrix[i] = []
        for(var j = 0;j<numColunas;j++){
            matrix[i][j]=Math.floor(10*Math.random())            
        }
    }
         return matrix
}

matrix1 = fill(3,5)
matrix2 = fill(5,3)

function produto(matriz1,matriz2){
    var matriz3 = []
    for(var a = 0;a<matriz1.length;a++){       /* indice que varia a linha da matriz A de 0 a 2*/
    matriz3[a]=[]   
        for(var b=0;b<matriz2[0].length;b++){  /*  indice que varia a coluna da matriz B de 0 a 2*/
            matriz3[a][b] = []
            var somatorio = 0
            for(var c=0;c<matriz1[0].length;c++){   /* índice que varia entre 0 e 4 para pegar cada elemento */
                somatorio = (matriz1[a][c]*matriz2[c][b]) + somatorio /* o somatorio registra o somatorio dos produtos */
            }
            matriz3[a][b]=somatorio  /* aqui definimos cada elemento da matriz3 que vai ser o produto */
        }
    }
    return matriz3
}

matrix3 = produto(matrix1,matrix2)

function ImprimirMatrizes(matriz1,matriz2,matriz3){
    console.log('\nA matriz A é igual a: \n'.yellow)    /* criei uma outra função para imprimir todas as matrizes */
    for(x=0;x<matriz1.length;x++){
        console.log(matriz1[x].join(' '))
    }
    console.log('\nA matriz B é igual a: \n'.magenta)
    for(x=0;x<matriz2.length;x++){
        console.log(matriz2[x].join(' '))
    }
    console.log('\nA matriz C que representa o produto AxB é igual a: \n'.green)
    for(x=0;x<matriz3.length;x++){
        console.log(matriz3[x].join(' '))
    }
}

ImprimirMatrizes(matrix1,matrix2,matrix3)