import express from "express";
const router = express.Router();

//Pega a informação (dados)
router.get("/", (request, response) => {
  response.send("Acessando Administração via GET");
});

//GET com envio de parametros
router.get("/:id", (request, response) => {
  response.send(
    "Acessando Administração via GET com o id: " + request.params.id
  );
});

//Envia dados
router.post("/", (request, response) => {
  const body = `Login: ${request.body.login}\nSenha: ${request.body.senha}`;
  response.send("Acessando Administração via POST:\n" + body);
});

// Faz alterações de pedaços de dados
router.patch("/:id", (request, response) => {
  response.send("Acessando Administração via PATCH");
});

// Faz a alteração de "todos os dados"
router.put("/:id", (request, response) => {
  response.send("Acessando Administração via PUT");
});

// DELETA dados
router.delete("/:id", (request, response) => {
  response.send("Acessando Administração via DELETE");
});

export default router;
