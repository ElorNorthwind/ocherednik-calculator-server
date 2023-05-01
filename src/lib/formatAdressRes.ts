interface AdressResponce {
  value: string;
  url: string;
  label?: string;
  section?: string;
}

export interface AdressInfo {
  id: string;
  text: string;
}

export default function formatAdressRes(adresses: AdressResponce[] | []): AdressInfo[] | [] {
  if (adresses.length === 0) {
    return [];
  }

  return adresses.map((adress) => ({
    id: adress?.url.match(/Details\/(.*)$/)?.[1] || "",
    text: adress?.value || "",
  }));
}
