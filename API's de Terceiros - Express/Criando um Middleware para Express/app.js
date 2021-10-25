import express from "express";
import adminRoutes from "./routes/admin.js";
import userRoutes from "./routes/user.js";

const app = express();

/** 
 Quando estamos usando .use(), estamos usando uma função de Middleware.
 Neste caso, estamos usando a função de json(), que se encaixa em uma das funções de Middleware, chamada Built-in.
 Função está que é nativa do EXPRESS.
**/
app.use(express.json());

// Função em nivel de Aplicação
app.use((request, response, next) => {
  console.log("Executando Middleware em nivel de aplicação");

  return next();
});

app.get("/", (request, response) => {
  response.send("Hello World!");
});

/**
 * Aqui usamos função de Middleware para trabalhar nas rotas, uma função em nivel de rota
 * quando a rota for chamada, chamamos a função de adminRoutes ou userRoutes.
 **/
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

app.listen(3000, () => {
  console.log(`Server running: http://localhost:3000`);
});

/**
 * Existem tipos de Middleware
 *
 * ### Funções de Middleware em nivel de Aplicação
 * São funções que construimos e queremos que sejam executadas enquanto a aplicação está rodando
 *
 * ### Funções de Middleware em nivel de Rota
 * São funções que construimos para tratamento das rotas
 *
 * ### Funções de Middleware de Erros
 * São funções que construimos para tratamento de erros
 *
 * ### Funções de Middleware de Terceiros
 * São funções que são criadas por terceiros, um exemplo é o bodyParser
 * que podemos incluir dentro da nossa aplicação para manipular informações
 * HTTP
 *
 * ### Funções de Middleware Built-In
 * São funções nativas do próprio Express
 *
 * **/
