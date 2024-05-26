const prompt = require('prompt-sync')()
const colors = require('colors')

console.log('Forneça 5 horários diferentes que serão válidos e impressos: \n'.yellow)

function fill(horario,size){    /* função macro para preencher o array com os horários */
    
    function addZero(x){
        if (x<10){x = '0'+x}    /* essa função vai servir para adicionar um 0 caso o número dado seja entre 0 e 9 assim fica no formato HH:MM:SS mesmo para números de um algarismo  */
        return x
    }
    
for (i=0;i<size;i++){
    hora = parseInt(prompt((i+1)+'º Horário: Digite o campo das horas entre 00 e 23: '))
    while(isNaN(hora) || 0>hora || hora>=23){hora = parseInt(prompt('Valor Inválido'.red+(i+1)+'º Horário: Digite o campo das horas entre 01 e 23: '))}
    hora = addZero(hora)

    minuto = parseInt(prompt(i+1+'º Horário: Digite o campo das minutos entre 00 e 59: ' ))
    while(isNaN(minuto) || 0>minuto || minuto>=59){minuto = parseInt(prompt('Valor Inválido'.red+(i+1)+'º Horário: Digite o campo dos minutos entre 00 e 59: '))}
    minuto = addZero(minuto)

    segundo = parseInt(prompt(i+1+'º Horário: Digite o campo dos segundos entre 0 e 59: ' ))
    while(isNaN(segundo) || 0>segundo || segundo>=59){segundo = parseInt(prompt('Valor Inválido'.red+(i+1)+'º Horário: Digite o campo dos segundos entre 0 e 59: '))}
    segundo = addZero(segundo)

horario.push(hora+':'+minuto+':'+segundo)

}
}

let arrayHorario = []
fill(arrayHorario,5)

console.log('Os horários insderidos foram: '.green+arrayHorario.join(', '))