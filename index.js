import "dotenv/config";
import express from "express";
import indexRoutes from "./routes/index.routes.js";
import userRoutes from "./routes/users.routes.js";

const app = express();
const port = 4000;

app.use(indexRoutes);
app.use(userRoutes);

app.listen(port, console.log("http://localhost:"+ port));