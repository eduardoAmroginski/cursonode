// Arquivo com código Não Bloqueante (Non Blocking)

const fs = require("fs");

console.log((process.hrtime()[0]/60).toFixed(5));
console.log("Antes da leitura do arquivo");

const dados = fs.readFile("file.txt", (error, data) => {
    if (error) throw error

    console.log("Terminei a leitura de file.txt");

});

console.log("Executando o console após o arquivo");
console.log((process.hrtime()[0]/60).toFixed(5));
