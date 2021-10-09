const { writeFile } = require("fs"); // Atribuição por desestruturação

writeFile("arquivo.txt", "Criando Arquivo de Texto com writeFile", (err) => {
  if (err) throw err;

  console.log("Arquivo Criado com Sucesso!");
});
