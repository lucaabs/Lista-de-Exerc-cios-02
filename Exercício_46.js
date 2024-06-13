const prompt = require('prompt-sync')()
const colors = require('colors')

/* vou criar um array de objetos vou colocar somente dois vendedores que fizeram 1 venda (Joana e Pedro) e um vendedor que fez 3 vendas (Lucas) todos os outros fizeram duas vendas cada*/

arrayDeObjetos =[
    {vendedor: 'Lucas', valor: 120},
    {vendedor: 'Joana', valor: 30},
    {vendedor: 'Saulo', valor: 370},
    {vendedor: 'Tiago', valor: 500},
    {vendedor: 'Fernanda', valor: 1150},
    {vendedor: 'Felipe', valor: 53},
    {vendedor: 'Larissa', valor: 576},
    {vendedor: 'Pedro', valor: 450},
    {vendedor: 'Maria', valor: 894},
    {vendedor: 'Marcia', valor: 2345},
    {vendedor: 'Samantha', valor: 565},
    {vendedor: 'Lucas', valor: 80},
    {vendedor: 'Saulo', valor: 120},
    {vendedor: 'Tiago', valor: 784},
    {vendedor: 'Fernanda', valor: 2563},
    {vendedor: 'Felipe', valor: 751},
    {vendedor: 'Larissa', valor: 200},
    {vendedor: 'Maria', valor: 811},
    {vendedor: 'Marcia', valor: 23},
    {vendedor: 'Samantha', valor: 780},
    {vendedor: 'Lucas', valor: 800},

]

console.log('\nNesse mês essas foram as vendas em R$\n'.yellow)
console.log(arrayDeObjetos)

let novoObjeto ={}

arrayDeObjetos.forEach( function (element) {   /* essa estrutura é pra acessar cada elemento do array */
        if(novoObjeto[element['vendedor']]){ /* se ja existir o nome desse vendedor adiciona o valor da venda anterior a venda atual */
            novoObjeto[element['vendedor']] += element['valor']
        }
        else (novoObjeto[element['vendedor']]=element['valor']) /* se não existir ele é adicionado normalmente sem ser somado a nada */
        
        } 
);


console.log('\nO total de vendas em R$ de cada vendedor foi: \n'.magenta)
console.log(novoObjeto)
