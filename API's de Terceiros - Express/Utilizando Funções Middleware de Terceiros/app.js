import express from "express";
import adminRoutes from "./routes/admin.js";
import userRoutes from "./routes/user.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());

// Middleware de terceiro
app.use(cookieParser());

app.use((request, response, next) => {
  console.log("Executando Middleware em nivel de aplicação");
  return next();
});

// Função feita em cima de middleware de terceiro
app.get("/setcookie", (request, response) => {
  response.cookie("user", "Eduardo", { maxAge: 900000, httpOnly: true });
  return response.send("Cookie gravado com sucesso!");
});

// Função feita em cima de middleware de terceiro
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

app.listen(3000, () => {
  console.log(`Server running: http://localhost:3000`);
});
