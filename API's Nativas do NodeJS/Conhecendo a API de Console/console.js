console.log("Exibindo uma mensagem no console!");

// Mostrar em forma de erro
console.error(new Error("Exibindo mensagem de erro, temos problemas"));

const carros = ["GM", "FIAT", "FORD", "VW", "Renault", "Honda", "Hyundai"];

// Mostrar em forma de tabela
console.table(carros);

const dados = {
  name: "Eduardo Amroginski",
  empresa: "Enterprise Alguma cosia",
};

console.table(dados);

// Realiza uma contagem
console.count("Processo");
console.count("Processo");
console.count("Processo");

// Reseta a contagem
console.log("Resetando o Processo");
console.countReset("Processo");
console.count("Processo");

//Mostra o tempo (usado para verificar o consumo de tempo)
console.time("contador");

for (let i = 0; i < 100; i++) {
  //   console.log("-");
}

console.timeEnd("contador");

//Verifica se uma condição está dando certo, se der certo não é feito nada, caso de algum problema será exibido uma mensagem de erro
console.assert(true, "Faça Alguma coisa");
console.assert(false, "Ih Rapaz %s, que pena!", "Não Funcionou");

//Limpa todos os dados do console
// console.clear();
