import "dotenv/config";
import "./db";
import express from "express";
import path from "path";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import postRouter from "./routers/postRouter";
import commentRouter from "./routers/commentRouter";

const app = express();
const logger = morgan("dev");

const PORT = 4000;
const handleListening = () =>
  console.log(`✅ Listening on PORT http://localhost:${PORT}`);

app.use(logger);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);

app.use(express.static(path.join(__dirname, "../client/build")));
app.use("/", rootRouter);
app.use("/user", userRouter);
app.use("/post", postRouter);
app.use("/comment", commentRouter);

app.listen(PORT, handleListening);
