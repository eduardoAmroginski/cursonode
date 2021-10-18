const path = require("path");

console.log("basename: ", path.basename("c:\\temp\\arquivo.html")); // Traz o nome do arquivo

console.log("normalize: ", path.normalize("c:\\temp/dir//subdir/dir/..")); // Normaliza o caminho

console.log(
  "join path:",
  path.join("/teste", "teste2", "teste3/teste4", "dir2", ".")
); // Faz um join com as strings passadas, formando o caminho

console.log("resolve: ", path.resolve("path.js")); // retorna o caminho completo do arquivo

console.log("extension: ", path.extname("path.js")); // Retorna a extensão do arquivo passado
