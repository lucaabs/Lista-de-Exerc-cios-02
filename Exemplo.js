// Função para criar e imprimir a matriz identidade 7x7
function imprimirMatrizIdentidade() {
    // Criando uma matriz vazia 7x7
    var matriz = [];
    for (var i = 0; i < 7; i++) {
        matriz[i] = [];
        for (var j = 0; j < 7; j++) {
            // Atribuindo 1 à diagonal principal e 0 aos demais elementos
            matriz[i][j] = (i === j) ? 1 : 0;
        }
    }

    // Imprimindo a matriz identidade
    for (var i = 0; i < 7; i++) {
        console.log(matriz[i].join(" "));
    }
}

// Chamando a função para imprimir a matriz identidade
imprimirMatrizIdentidade();