import { type AxiosResponse } from "axios";
import { type HTMLElement, parse } from "node-html-parser";

export interface AdressDetails {
  name: string;
  ao: string;
  area: string;
  year: string;
  series: string;
}

export function parseAdressInfo(html: AxiosResponse["data"]): AdressDetails {
  // const decoder = new TextDecoder("windows-1251");
  // const root = parse(decoder.decode(html)).removeWhitespace();
  const root = parse(html).removeWhitespace();

  return {
    name: getAdressName(root),
    ao: getAo(root),
    area: getArea(root),
    year: getYear(root),
    series: getSeries(root),
  };
}

function getAdressName(node: HTMLElement): string {
  return node?.querySelector("div.inside-caption h1.tClr1")?.rawText || "";
}

function getAo(node: HTMLElement): string {
  const longAo = node?.querySelector("div.inside-caption h2.tClr2")?.rawText?.match(/\((.*),/i)?.[1] || "";
  return AoShortened[longAo] || "";
}

const AoShortened: Record<string, string> = {
  "Центральный Административный Округ": "ЦАО",
  "Северный Административный Округ": "САО",
  "Северо-Восточный Административный Округ": "СВАО",
  "Восточный Административный Округ": "ВАО",
  "Юго-Восточный Административный Округ": "ЮВАО",
  "Южный Административный Округ": "ЮАО",
  "Юго-Западный Административный Округ": "ЮЗАО",
  "Западный Административный Округ": "ЗАО",
  "Северо-Западный Административный Округ": "СЗАО",
  "Зеленоградский Административный Округ": "ЗелАО",
  "Троицкий Административный Округ": "ТАО",
  "Новомосковский Административный Округ": "НАО",
};

function getArea(node: HTMLElement): string {
  return node?.querySelector("div.inside-caption h2.tClr2")?.rawText?.match(/, район (.*)\)/i)?.[1] || "";
}

function getYear(node: HTMLElement): string {
  return node?.querySelector("table.infoCompanyTable tbody tr:nth-child(1) td:nth-child(2)")?.rawText || "";
}

function getSeries(node: HTMLElement): string {
  return node?.querySelector("table.infoCompanyTable tbody tr:nth-child(2) td:nth-child(2)")?.rawText || "";
}
