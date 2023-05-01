import express from "express";
import adressRouter from "./adress.router.js";
const router = express.Router();

// импортим роутеры отдельных сущностей
// const userRouter = require("./user.router.js");
// router.use("/post", postRouter);

router.use("/adress", adressRouter);

export default router;
