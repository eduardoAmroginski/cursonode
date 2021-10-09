// Lê um arquivo

const fs = require("fs");

//Forma Não Bloqueante
fs.readFile("texto.txt", (err, data) => {
  if (err) throw err;

  console.log(data.toString());
});

//Forma Bloqueante
const texto = fs.readFileSync("texto.txt");
console.log(`Texto: ${texto}`);
