const prompt = require('prompt-sync')()
const colors = require('colors')

const objeto1 = {prop1: 'Lucas', prop2: 33, prop3: ['matemática', 'física'], prop4: 'carnaval'}
const objeto2 = {prop3: ['filosofia', 'química'], prop4: 'natal', prop5: 110, prop6: 'vermelho'}

function juntarObjetos(obj1,obj2){
    var obj3 = []

    Object.assign(obj3,obj1)  /* o Oject.assign copia as propriedades enumeradas de um objeto para outro */
    Object.assign(obj3,obj2)  /* colocando o obj2 no assign seguinte eu dou preferências aos itens do assign 2 */

    return obj3
}

console.log('\nO objeto 1 é: \n'.red)
console.log(objeto1)

console.log('\nO objeto 2 é: \n'.red)
console.log(objeto2)

console.log('\nFundindo os objetos com preferência do objeto 2, teremos:'.red)
console.log(juntarObjetos(objeto1,objeto2))