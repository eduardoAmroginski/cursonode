function execute() {
  executeTwo();
}

function executeTwo() {
  throw new Error(
    "Ah não, deu erro! Não é possivel, na minha máquina funciona!"
  );
}
function init() {
  //Tente executar alguma coisa, se der erro execute o catch automaticamente
  try {
    execute();
  } catch (error) {
    console.log(`Temos um problema: ${error}`);
  }
  //Usar try/catch, faz com que caso haja um erro o programa não é encerrado.
}

init();
console.log("Depois do Erro");
