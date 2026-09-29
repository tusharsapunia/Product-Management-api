import express from "express";
const app = express();
import router from "./routes/productRoutes.js";
//middleware
app.use(express.json());
// const router = require("./Routers/auth-routers.js");

app.use("/api/auth", router);
app.listen(3200);
