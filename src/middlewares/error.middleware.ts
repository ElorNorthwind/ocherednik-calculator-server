import ApiError from "../lib/errors.js";
import { Request, Response } from "express";

export default function (err: ApiError, req: Request, res: Response) {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message, errors: err.errors });
  }
  return res.status(500).json({ message: "Непредвиденная ошибка", errors: [err] });
}
