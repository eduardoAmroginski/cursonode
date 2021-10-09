const http = require("http");
const { readFile } = require("fs");

const host = "127.0.0.1";
const port = 3002;
const url = `http://${host}:${port}`;

let conteudo = "";

readFile("index.html", (err, data) => {
  if (err) throw err;
  conteudo = data;
});

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.end(conteudo);
});

server.listen(port, host, () => {
  console.log(`Server is Running ${url}`);
});

const open = //Configuração para abrir o navegador ao iniciar o server
  process.platform == "darwin"
    ? "open"
    : process.platform == "win32"
    ? "start"
    : "xdg-open";

require("child_process").exec(open + " " + url); //executa a abertura do browser com a url correta
