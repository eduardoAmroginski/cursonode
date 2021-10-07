const EventEmitter = require("events");

class Evento extends EventEmitter {}

const meuEvento = new Evento();

//Usando o "on" criamos o novo evento
meuEvento.on("seguranca", (x, y) => {
  console.log(`Executando o evento "seguranca": ${x} | ${y}`);
});

meuEvento.emit("seguranca", "userADMIN", "Alterou salário");
