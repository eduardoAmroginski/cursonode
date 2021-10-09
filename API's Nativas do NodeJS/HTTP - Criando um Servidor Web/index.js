const http = require("http");
const hostname = "127.0.0.1";
const port = 3001;
const url = `http://${hostname}:${port}/`;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.end("<h1>Bem Vindo <br/>Node.JS<h1/>");
});

server.listen(port, hostname, () => {
  console.log(`Server is running at ${url}`);
});

const open = //Configuração para abrir o navegador ao iniciar o server
  process.platform == "darwin"
    ? "open"
    : process.platform == "win32"
    ? "start"
    : "xdg-open";

require("child_process").exec(open + " " + url); //executa a abertura do browser com a url correta
