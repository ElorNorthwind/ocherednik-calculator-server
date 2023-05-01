import adressService from "../services/adress.service.js";
import { Request, Response, NextFunction } from "express";

class adressController {
  async getAdressList(req: Request, res: Response, next: NextFunction) {
    try {
      const query = (req?.query?.term as string) || "";
      const adresses = await adressService.findByQuery(query);
      return res.json(adresses);
    } catch (e) {
      next(e);
    }
  }
  async getAdressById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req?.params?.id || "";
      const adressDetails = await adressService.getById(id);
      return res.json(adressDetails);
    } catch (e) {
      next(e);
    }
  }
}

export default new adressController();
