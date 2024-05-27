const prompt = require('prompt-sync')()
const colors = require('colors')

function calcPesoIdeal() {
let pesoIdeal

alt = parseFloat(prompt('Insira a sua altura em cm (Exemplo: 165 cm ou 180 cm): '))
while(isNaN(alt) || alt<=0){alt = parseFloat(prompt('Valor inválido! '.red+'Insira a sua altura em m (Exemplo: 164 cm ou 180 cm): '))}

sex = prompt('Insira seu sexo, m para masculino e f para feminino: ').toLowerCase()
while((!isNaN(sex)) || (sex!=='m') && (sex!=='f')){sex = prompt('Valor inválido! '.red+'Insira seu sexo, m para masculino e f para feminino: ').toLowerCase()}

    if(sex=='m'){pesoIdeal = 72.7*(alt/100) - 58}
  if(sex=='f'){pesoIdeal = 62.1*(alt/100) - 44.7}

return pesoIdeal
}

console.log(('\nSeu peso ideal é '+calcPesoIdeal().toFixed(1)+' kg.').magenta)