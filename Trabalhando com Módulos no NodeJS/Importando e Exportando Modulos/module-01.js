/* 
  Para um modulo ser bem exportado, sem deixar nenhuma função ou variavel vazar,
  devemos deixar as funções e váriaveis bem definidas. Para que
  aquilo que foi exportado como um módulo possa ser importado de forma organizada.
  Se não, pode haver modulos/funções/variaveis/console.logs sendo escapados sem nosso
  controle
*/

const oculta = () => {
  console.log("Executando função oculta");
};

const executa = () => {
  console.log("Executando a função executa");
};

const welcome = `Bem vindo ao módulo module-01.js`;

module.exports = { executa, welcome };
