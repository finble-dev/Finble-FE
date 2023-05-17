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
