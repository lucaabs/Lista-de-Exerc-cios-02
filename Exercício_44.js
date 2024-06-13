const prompt = require('prompt-sync')()
const colors = require('colors')

let objeto = {nome: 'Juliana', idade: 88, cor:'azul', altura: 1.67, prof: 'aposentada', filhos: 2, sexo: 'feminino', numero: 3}
let cont = 0

function contarStrings(){
for (const variable in objeto){
    if(typeof(objeto[variable])==='string'){   /* typeof verifica o tipo do argumento, se for um string ele retorna 'string' nesse caso se o tipo for igual ao tipo de 'string' o contador soma +1 */
        cont = cont + 1
    }
}
}

contarStrings()

console.log('\nO objeto é: \n'.magenta)
console.log(objeto)

console.log('\nO número de propriedades com strings é: '+cont)