import express from "express";
import path from "path";
import morgan from "morgan";

const app = express();
const logger = morgan("dev");

app.use(logger);

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

const PORT = 4000;
const handleListening = () =>
  console.log(`Listening on PORT http://localhost:${PORT}`);

app.listen(PORT, handleListening);
