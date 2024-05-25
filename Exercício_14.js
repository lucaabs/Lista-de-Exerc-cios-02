const prompt = require('prompt-sync')()
const colors = require('colors')

function fillName(vector){
         for(i=0;i<7;i++){       /* contador para no sétimo nome */
            vector[i] = prompt('Insira o '+(i+1)+'º nome que desejas armazenar na lista: ')
            while(!isNaN(vector[i])){vector[i] = prompt('Não é um nome válido. '.red+'Insira o '+(i+1)+'º nome que desejas armazenar na lista: ')}
         }
}

let vectorEntrance = []   /* nossa variável precisa ser um array para a entrada, por isso o defini com [] */
fillName(vectorEntrance)

console.log('\n Invertendo a ordem da lista teremos: \n')
console.log(vectorEntrance.reverse().join(', ')) /* o método .reverse inverte o array e o método join organiza eles com o argumento entre virgulas */