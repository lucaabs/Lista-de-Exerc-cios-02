const prompt = require('prompt-sync')()
const colors = require('colors')

let matriz = []
let contador = 0
let vecC = []

/* primeiro vou criar uma matriz aleatória 6 por 8 */

function fill(nLinhas,nColuna){
    for(var i = 0;i<nLinhas;i++){
        matriz[i]=[]
        for(var j = 0;j<nColuna;j++){
            matriz[i][j]=Math.floor(10*Math.random())-Math.floor(10*Math.random())
            /* criei esse comando que vai gerar um numero aleatorio e subtrair ele de outro numero aleatorio, ambos
            ente 0 e 9. Logo inevitavelmente vou ter numeros negativos e positivos. Entre -9 e 9 */
            contador = (matriz[i][j]<0) ? contador+1 : contador  /* vai contar quantos negativos tem por linha */
            vecC[i]=contador   /* registra o numero de negativos da linha num vecC */
        }contador = 0 /* quando termina a linha eu zero o contador colocando ele igual a 0 */
        
    }
    for (var i = 0; i<nLinhas;i++){
        console.log(matriz[i].join('           '))
    }
    
}


console.log('\nA matriz 6x8 gerada é: \n'.magenta)
fill(6,8)
console.log('\nNo array abaixo temos a quantidade de números negativos por linha \n'.magenta)
console.log(vecC)