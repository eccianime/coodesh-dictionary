export type AppState = {
  isLoading: boolean;
  isModalVisible: boolean;
  modalText: string;
  modalType: "success" | "error" | "";
};

export type AccountState = {
  currentUser?: any;
  favorites: any[];
};

export type WordsState = {
  currentPage: number;
  words: string[];
};
