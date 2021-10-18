console.log("Executando module-01.js");

const oculta = () => {
  console.log("Executando função oculta");
};

//Metodo 1
module.exports.executa = () => {
  console.log("Executando a função executa");
};

module.exports.welcome = `Bem vindo ao módulo module-01.js`;

/* Outras formas de exportar uma função ou variáveis, podemos 
   adicionar DEFAULT para dizer que a função é padrão a ser exportado:

Metodo 2
export default function executa() {
  console.log("Executando a função executa");
}

Metodo 3
const executa = () => {
  console.log("Executando a função executa");
};
export { executa };
*/
