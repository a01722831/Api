import "dotenv/config";
import express from "express";
import indexRoutes from "./routes/index.routes.js";
import userRoutes from "./routes/users.routes.js";
import loginRoutes from "./routes/login.routes.js";
import morgan from "morgan";
import cors from "cors"

const app = express();
const port = 4000;


app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(indexRoutes);
app.use(userRoutes);
app.use(loginRoutes)

app.listen(port, console.log("http://localhost:"+ port));