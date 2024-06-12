const prompt = require('prompt-sync')()
const colors = require('colors')

/* vou assumir que cada uma das 20 questõea da prova tem 2 alternativas: verdadeiro (V) ou falso (F)
e tentar gerar uma função que gere aleatoriamente gabaritos com as 20 questões respondidas com uma
das alternativas */

let alternativas = 'FV' /* uma string é um array e cada posição vai representar uma letra */


/* vou usar a função Math.random multiplicada pela length da alternativas. assim vai variar de 0 a 2
colocando floor varia de 0 (F) a 1 (V). Se eu utilizar isso com o método .charAt do array alternativas eu
consigo gerar as respostas aleatorias porque o método array.charAt(index) devolve a string no
index do array. */

 function gerarResposta(){
    let option = []
    while(option.length<20){
        option.push(alternativas.charAt(Math.floor(alternativas.length*Math.random()))) 
    }return option
}

/* vamo criar o objeto com os alunos e seus respectivos gabaritos. Vou enumerar os alunos */

let notasAlunos = []


for(i=0;i<50;i++){
    var notaAluno = []
    notaAluno.nome = 'Aluno '+(i+1)
    notaAluno.resposta = gerarResposta()
    notaAluno.acertos = 0   /* será um número preenchido após a verificação com o gabarito */
    notaAluno.status = ' '  /* será uma string preenchida após saber se os acertos são maiores que 12 ou não */
    notasAlunos.push(notaAluno)
}

notasAlunos.forEach(element => {
    console.log('Respostas do '+element.nome+' : '+element.resposta.join(' , '))
    
});

let gabarito = gerarResposta()
console.log('\nO gabarito é: '.magenta+gabarito.join(' , ').yellow+'\n')

/* agora temos que comparar as respostas dos alunos com o gabarito. vou criar uma função de
verificação */

let cont = 0

function verificarRespostas(){
    for(j=0;j<50;j++){
        for (k=0;k<20;k++){
            if(notasAlunos[j].resposta[k]==gabarito[k]){
                cont = cont + 1
            }
        } notasAlunos[j].acertos = cont
        if(cont>=12){notasAlunos[j].status='APROVADO'.green}
        else (notasAlunos[j].status='REPROVADO'.red)
          cont = 0
    }
}

verificarRespostas()

notasAlunos.forEach(element => {
    console.log('O '+element.nome+' teve '+element.acertos+' acertos'+'. '+element.status)
    
});

