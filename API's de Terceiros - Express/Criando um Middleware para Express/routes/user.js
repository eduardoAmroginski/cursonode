import express from "express";
const router = express.Router();

const logRequest = (request, response, next) => {
  console.log("Executando Middleware para a Rota usuários");
  return next();
};

//Pega a informação (dados)
router.get("/", logRequest, (request, response) => {
  response.send("Listando Usuários via GET");
});

//GET com envio de parametros
router.get("/:id", (request, response) => {
  response.send("Listando o Usuário via GET com o id: " + request.params.id);
});

//Envia dados
router.post("/", (request, response) => {
  const body = `Login: ${request.body.login}\nSenha: ${request.body.senha}`;
  response.send("Enviado dados do Usuário via POST:\n" + body);
});

// Faz alterações de pedaços de dados
router.patch("/:id", (request, response) => {
  response.send("Modificando um dado do Usuário via PATCH");
});

// Faz a alteração de "todos os dados"
router.put("/:id", (request, response) => {
  response.send("Alterando Usuário via PUT");
});

// DELETA dados
router.delete("/:id", (request, response) => {
  response.send("Deletando Usuário via DELETE");
});

export default router;
