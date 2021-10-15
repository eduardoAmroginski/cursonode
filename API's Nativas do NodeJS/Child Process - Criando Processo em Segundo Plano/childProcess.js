/*
    Este código foi testado usando o terminal Cmder
    download: https://cmder.net/
*/
const { spawn } = require("child_process");
const ls = spawn("ls"); // lista os arquivos da pasta atual
// const ls = spawn("ls", ["..", "-lh", "/usr"]); // lista os arquivos da pasta anterior usando parametros para mais informaçõe

ls.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on("data", (data) => {
  console.log(`stderr: ${data}`);
});

ls.on("close", (code) => {
  console.log(`Processo em segundo plano finalizado com o código ${code}`);
});

/*
    Com o SPAWN, conseguimos executar um comando externo
*/
