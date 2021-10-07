const fs = require("fs");

fs.readFile("file.txt", (error, data) => {
  //Metodo não bloqueante
  if (error) throw error;

  console.log(data);
});

fs.unlinkSync("file.txt"); //Metodo não bloqueante

//A leitura do arquivo acaba sendo incompleta, pois o metodo utilizado para leitura foi não bloqueante. Isso gera problemas, pois o arquivo não foi lido totalmente porque foi excluido antes de completar a leitura
