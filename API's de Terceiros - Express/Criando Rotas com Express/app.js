import express from "express";
import adminRoutes from "./routes/admin.js";
import userRoutes from "./routes/user.js";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

app.listen(3000, () => {
  console.log(`Server running: http://localhost:3000`);
});
