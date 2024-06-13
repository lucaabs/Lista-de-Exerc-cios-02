const prompt = require('prompt-sync')()
const colors = require('colors')

let cores = ['azul','preto','vermelho','azul','branco','branco','amarelo','rosa','azul','roxo','preto']

console.log('\nO array criado é:\n'.yellow)
console.log(cores)

let objeto = {}

cores.forEach(element => { /* vou usar o forEach para correr cada elemento do array */
    if(objeto[element]){   /* se o objeto[element] existir ele vai adicionar 1 ao que já existe */
        objeto[element]++
    } else (objeto[element]=1) /* se não existe o objeto[element é criado, obviamente no inicio do loop nenhum vai existir e depois eles serão adicionados se forem repetidos
    ] */
    
});
console.log('\nO objeto com a contagem é:\n'.magenta)
console.log(objeto)