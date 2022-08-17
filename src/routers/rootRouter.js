import express from "express";
import { postSignUp } from "../controllers/userController";

const rootRouter = express.Router();

rootRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

rootRouter.route("/signup").post(postSignUp);

export default rootRouter;
