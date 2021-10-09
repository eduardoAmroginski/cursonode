//Cria arquivos usando Promise

const { writeFile } = require("fs");

function criaArquivo(name, content) {
  return new Promise((resolve, reject) => {
    writeFile(name, content, (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
}

criaArquivo("promisseArquivo.txt", "Arquivo Criado utilizando promises")
  .then(() => {
    console.log("Arquivo promiseArquivo.txt Criado com Sucesso!");
  })
  .catch((err) => console.log(err));
