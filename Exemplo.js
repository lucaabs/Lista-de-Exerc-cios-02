// Função para gerar números aleatórios entre 1 e 60
function gerarDezenas() {
    let dezenas = [];
    while (dezenas.length < 13) {
        let numero = Math.floor(Math.random() * 60) + 1;
        if (!dezenas.includes(numero)) {
            dezenas.push(numero);
        }
    }
    return dezenas.sort((a, b) => a - b);
}

// Array para armazenar os apostadores
let apostadores = [];

// Gerar os apostadores
for (let i = 1; i <= 100; i++) {
    let apostador = {
        nome: "Apostador " + i,
        dezenas: gerarDezenas()
    };
    apostadores.push(apostador);
}

// Exibir os apostadores e suas dezenas
apostadores.forEach(apostador => {
    console.log(apostador.nome + ": " + apostador.dezenas.join(", "));
});

console.log(apostadores)