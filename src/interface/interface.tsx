export interface ETF {
  name: string;
  intro: string;
  detail: Array<string>;
  hashTag: string;
  img: string;
}

export interface Modal {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ISearchStock {
  symbol: string;
  market: string;
  name: string;
  sector: string;
}
