import express from "express";
const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello World!");
});

//Pega a informação (dados)
app.get("/admin", (request, response) => {
  response.send("Acessando Administração via GET");
});

//GET com envio de parametros
app.get("/admin/:id", (request, response) => {
  response.send(
    "Acessando Administração via GET com o id: " + request.params.id
  );
});

app.listen(3000, () => {
  console.log(`Server running: http://localhost:3000`);
});
