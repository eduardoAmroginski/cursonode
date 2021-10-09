// Lê arquivos usando async e await
const fs = require("fs").promises; //Funciona a partir do NodeJS v12

async function read() {
  const data = await fs.readFile("texto.txt", "binary");
  return new Buffer.from(data);
}

try {
  read().then((data) => console.log(data.toString()));
} catch (error) {
  console.log(error);
}
