const prompt = require('prompt-sync')()
const colors = require('colors')

/* vou gerar as duas matrizes aleatoriamente */
let matrixProd = []


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

matrix1 = fill (3,5)
matrix2 = fill(5,3)

console.log(matrix1)
console.log(matrix2)



