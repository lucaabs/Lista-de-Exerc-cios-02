const prompt = require('prompt-sync')()
const colors = require('colors')

/* vou considerar que as transações começam a partir da id 101 e as categorias eu vou mudar de acordo com o valor da transação, 
até 100 catA, 100-1000 cat-B, 1000-10000 cat-C, acima de 10000 cat-D */

arrayObjetos =[
    {id:104 ,valor: 200 ,data: '14 de janeiro' ,categoria: 'B'},        
    {id:105 ,valor: 98000 ,data: '14 de janeiro' ,categoria: 'D'},
    {id:107 ,valor: 15600 ,data: '17 de janeiro' ,categoria: 'D'},
    {id:106 ,valor: 30 ,data: '16 de janeiro' ,categoria: 'A'},
    {id:108 ,valor: 2500 ,data: '18 de janeiro' ,categoria: 'C'},
    {id:109 ,valor: 8500 ,data: '18 de janeiro' ,categoria: 'C'},
    {id:201 ,valor: 8780 ,data: '19 de janeiro' ,categoria: 'C'},
    {id:202 ,valor: 1 ,data: '19 de janeiro' ,categoria: 'A'},
    {id:203 ,valor: 8780 ,data: '19 de janeiro' ,categoria: 'B'},
    {id:204 ,valor: 50000 ,data: '21 de janeiro' ,categoria: 'D'},
    {id:230 ,valor: 356 ,data: '22 de janeiro' ,categoria: 'A'},
    {id:241 ,valor: 5867 ,data: '25 de janeiro' ,categoria: 'C'},
]

console.log('\nAs transações financeiras no mês de janeiro foram: \n'.yellow)
console.log(arrayObjetos)


let novoObjeto= {}

arrayObjetos.forEach(element => {         /* correr por todos os elementos do array */
    if(novoObjeto['id das transações da categoria '+element.categoria]){
        novoObjeto['id das transações da categoria '+element.categoria].push(element.id)
        novoObjeto['Total das transações do tipo '+element.categoria+' em R$'] = novoObjeto['Total das transações do tipo '+element.categoria+' em R$'] + element.valor
    } else {novoObjeto['id das transações da categoria '+element.categoria] = [element.id]
        novoObjeto['Total das transações do tipo '+element.categoria+' em R$'] = element.valor
    }
    }
);

console.log(novoObjeto)