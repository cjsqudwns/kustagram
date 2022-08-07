import "dotenv/config";
import "./db";
import express from "express";
import path from "path";
import morgan from "morgan";
import User from "./models/User";

const app = express();
const logger = morgan("dev");
const PORT = 4000;
const handleListening = () =>
  console.log(`✅ Listening on PORT http://localhost:${PORT}`);

app.use(logger);

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, handleListening);
