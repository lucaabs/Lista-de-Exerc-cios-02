const prompt = require('prompt-sync')()
const colors = require('colors')

let matriz = []
let somar = 0
let vec = []

/* vou usar a função da questão passada para criar essa matriz 15x20 com elementos entre -9 e 9 em cada posição
so preciso alterar o parâmetro de número de linha e número de coluna para 10 e 20 */

function fill(nLinhas,nColuna){
    for(var i = 0;i<nLinhas;i++){
        matriz[i]=[]
        for(var j = 0;j<nColuna;j++){
            matriz[i][j]=Math.floor(10*Math.random())-Math.floor(10*Math.random())
            /* criei esse comando que vai gerar um numero aleatorio e subtrair ele de outro numero aleatorio, ambos
            ente 0 e 9. Logo inevitavelmente vou ter numeros negativos e positivos. Entre -9 e 9 */
        }
        
    }
    for (var i = 0; i<nLinhas;i++){
        console.log(matriz[i].join('    '))
    }
    
}

fill(15,20)

function somaCol(nLin,nCol){
    for(var j =0; j<nCol;j++){
        for(var i = 0;i<nLin;i++){
        somar = somar + matriz[i][j]
        vec[j]=somar
        }somar =0
    }
    
    for(var i = 0;i<vec.length;i++){
        console.log('\nA soma da '+(i+1)+'ª coluna é: '+vec[i])
    }

}

somaCol(15,20)

