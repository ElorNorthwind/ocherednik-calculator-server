import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./routes/index.router.js";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use("/", router);

// app.get("/", (req: Request, res: Response) => {
//   res.send("welcome to api. What are you doing here, weary traveller?");
// });

app.listen(port, () => {
  console.log(`⚡️[server]: Server started on port:${port}`);
});
