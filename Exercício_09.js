const prompt = require('prompt-sync')()
const colors = require('colors')

/* vou definir uma variavel follow pra decidir se o calculo continua ou nao */
/* vou sempre incluir as estruturas while após um prompt para garantir que os valores inseridos sejam validos */

let menOutcome = 0
let womenOutcome = 0
let follow = true;
let cont = 1

while (follow) {
    let outcome = parseFloat(prompt('Digite o salário do '+cont+'º funcionário: '))
    while(isNaN(outcome) || outcome < 0){
        outcome = parseFloat(prompt('Valor inválido. '.red+'Digite o salário do'+cont+'º funcionário: '))
    }
    let sex = prompt('Digite o sexo do '+cont+'º funcionário, (M para masculino, F para feminino):').toUpperCase()
    while(sex!== "M" && sex!=="F")
        sex = prompt('Valor inválido. '.red+'Digite o sexo do funcionário (M) para masculino, (F) para feminino):').toUpperCase()

    if (sex === "M") {
        menOutcome += outcome
    } else if (sex === "F") {
        womenOutcome += outcome
    } 


    option = prompt('Deseja Continuar e adicionar outro funcionário? Digite S para sim e N para não').toUpperCase()

    if(option == "S"){follow = true}
    if(option == "N"){follow = false}
cont++    
}

console.log("Total dos salários dos funcionários homens: " + menOutcome);
console.log("Total dos salários das funcionárias mulheres: " + womenOutcome);