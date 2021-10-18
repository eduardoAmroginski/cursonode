/*
  No NodeJS 12, utilizamos os arquivos js com a extensão .mjs para dizer
  que é um arquivo modulo js. Já nas versões mais recentes do NodeJS, precisamos
  apenas importar os arquivos não-nativos com sua extensão. Por exemplo:
  import { teste } from "teste.js";
*/

import { EventEmitter } from "events";

class Evento extends EventEmitter {}

const meuEvento = new Evento();

//Usando o "on" criamos o novo evento
//Prepara o subscriber - assinante
meuEvento.on("seguranca", (x, y) => {
  console.log(`Executando o evento "seguranca": ${x} | ${y}`);
});

//publisher - emissor
meuEvento.emit("seguranca", "userADMIN", "Alterou salário");

meuEvento.on("encerrar", (dados) => {
  console.log("Assinante: " + dados);
});

meuEvento.emit("encerrar", "Encerando a execução da importação dos dados!");
