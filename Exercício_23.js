const prompt = require('prompt-sync')()
const colors = require('colors')

let matriz = [] /* criar um array para depois torná-lo multidimensional */

function fill(nLinha,nColuna){
    for(var i = 0;i<nLinha;i++){   /* o i vai correr entre as linhas */
        matriz[i]=[]               /* tornando o array multidimensional definindo outros arrays para cada índice */
        for(var j = 0;j<nColuna;j++){  /* o j vai correr nas colunas */
            matriz[i][j] = (i==j) ? 1 : 0 /* condicional ternário se a condição ? for verdadeira entrega 1, se for falsa entrega 0 */
        }
    }

    for(var i = 0; i<nLinha;i++){              /* imprimir no formato de matriz */
        console.log(matriz[i].join(' '))       /* o argumento dentro do join separa cada número de um com um espaço */
    }

}   

console.log('\n A matriz identidade 7x7 é definida por: \n'.magenta)

fill(7,7)
