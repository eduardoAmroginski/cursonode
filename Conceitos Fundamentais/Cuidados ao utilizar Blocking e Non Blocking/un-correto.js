const fs = require("fs");

fs.readFile("file.txt", (error, data) => {
  if (error) throw error;

  console.log(data);
  fs.unlink("file.txt", (unlinkError) => {
    if (unlinkError) throw unlinkError;
    console.log("Arquivo excluido com sucesso!");
  });
});

// Evite misturar códigos Bloqueantes com Não Bloqueantes
