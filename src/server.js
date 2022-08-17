import "dotenv/config";
import "./db";
import express from "express";
import path from "path";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import feedRouter from "./routers/feedRouter";
import commentRouter from "./routers/commentRouter";

const app = express();
const logger = morgan("dev");

const PORT = 4000;
const handleListening = () =>
  console.log(`✅ Listening on PORT http://localhost:${PORT}`);

app.use(logger);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/build")));
app.use("/", rootRouter);
app.use("/user", userRouter);
app.use("/feed", feedRouter);
app.use("/comment", commentRouter);

app.listen(PORT, handleListening);
