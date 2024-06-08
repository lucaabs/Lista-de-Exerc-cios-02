// Função para encontrar o maior elemento em módulo de uma linha
function encontrarMaiorElementoModulo(linha) {
    let maior = Math.abs(linha[0]); // Inicializa o maior elemento com o primeiro elemento da linha
    
    // Percorre os elementos da linha para encontrar o maior em módulo
    for (let i = 1; i < linha.length; i++) {
        const elementoAtual = Math.abs(linha[i]);
        if (elementoAtual > maior) {
            maior = elementoAtual;
        }
    }
    return maior;
}

// Função para dividir todos os elementos de uma linha pelo maior elemento em módulo
function dividirPorMaiorElementoModulo(linha, maiorElemento) {
    for (let i = 0; i < linha.length; i++) {
        linha[i] /= maiorElemento;
    }
}

// Função para imprimir uma matriz
function imprimirMatriz(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(" "));
    }
}

// Matriz M 12x13
let M = [
    [1, -2, 3, -4, 5, -6, 7, -8, 9, -10, 11, -12, 13],
    [2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12, -13, 14],
    // Adicione as outras linhas aqui
];

// Imprimir a matriz original
console.log("Matriz original:");
imprimirMatriz(M);

// Processar cada linha da matriz
for (let i = 0; i < M.length; i++) {
    const maiorElemento = encontrarMaiorElementoModulo(M[i]);
    dividirPorMaiorElementoModulo(M[i], maiorElemento);
}

// Imprimir a matriz modificada
console.log("\nMatriz modificada:");
imprimirMatriz(M);