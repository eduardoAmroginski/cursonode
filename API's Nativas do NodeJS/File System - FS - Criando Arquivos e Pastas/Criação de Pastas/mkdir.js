const fs = require("fs");
const assets = ["css", "js", "images", "fonts", "lib"];

// Essa função faz a criação de várias pastas baseadas na const assets
function make(dir) {
  dir.forEach((item) => {
    //Realiza a criação de pastas
    fs.mkdir(`projeto/assets/${item}`, { recursive: true }, (err) => {
      if (err) throw err;
      console.log(`Diretório ${item} criado com sucesso!`);
    });

    // Ao adicionarmos o parametro {recursive: true}, permitimos a criação de subpastas dentro do diretório criado
  });
}

make(assets);
