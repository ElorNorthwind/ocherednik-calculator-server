// const userController = require("../controllers/user.controller.js");

import express from "express";
import adressController from "../controllers/adress.controller.js";
const adressRouter = express.Router();

adressRouter.get("/", adressController.getAdressList);
adressRouter.get("/:id", adressController.getAdressById);

export default adressRouter;
