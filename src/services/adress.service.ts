import axios from "axios";
import formatAdressRes, { AdressInfo } from "../lib/formatAdressRes.js";
import { AdressDetails, parseAdressInfo } from "../lib/parseAdressInfo.js";

class adressService {
  async findByQuery(query: string): Promise<AdressInfo[] | []> {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://dom.mos.ru/Lookups/GetSearchAutoComplete",
      params: {
        term: query,
        section: "Buildings",
      },
    };
    try {
      const res = await axios.request(config);
      return formatAdressRes(res.data);
    } catch (e) {
      return [];
      //   console.log("Ошибка при обращении к data.mos.ru!");
      //   console.log(e);
    }
  }

  async getById(id: string): Promise<AdressDetails> {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://dom.mos.ru/Building/Details/${id}`,
    };
    try {
      const res = await axios.request(config);
      return parseAdressInfo(res.data);
    } catch (e) {
      return { name: "", ao: "", area: "", year: "", series: "" };
      //   console.log("Ошибка при обращении к data.mos.ru!");
      //   console.log(e);
    }
  }
}

export default new adressService();
