import express from "express";
import adminRoutes from "./routes/admin.js";
import userRoutes from "./routes/user.js";
import cookieParser from "cookie-parser";

const app = express();

// Quando usamos a função express.static(), dizemos q a pasta passada como parametro será usada para fornecer arquivos estáticos
app.use("/static", express.static("public"));

app.use(express.json());

app.use(cookieParser());

app.use((request, response, next) => {
  console.log("Executando Middleware em nivel de aplicação");
  return next();
});

app.get("/setcookie", (request, response) => {
  response.cookie("user", "Eduardo", { maxAge: 900000, httpOnly: true });
  return response.send("Cookie gravado com sucesso!");
});

app.get("/getcookie", (request, response) => {
  const user = request.cookies["user"];
  if (user) {
    return response.send(user);
  }
  return response.send("Cookie não existe!");
});

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

app.get("*", (request, response, next) => {
  setImmediate(() => {
    next(new Error("Temos um Problema"));
  });
});

// Função Middleware para tratamento de erros
app.use((err, request, response, next) => {
  console.log(err.stack);
  response.status(500).json({ message: err.message });
});

app.listen(3000, () => {
  console.log(`Server running: http://localhost:3000`);
});
