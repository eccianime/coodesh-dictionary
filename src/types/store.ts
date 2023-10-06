export type AppState = {
  isLoading: boolean;
  isModalVisible: boolean;
  modalText: string;
  modalType: "success" | "error" | "";
};

export type UserProps = {
  uid: string;
  email: string;
};

export type AccountState = {
  currentUser?: UserProps;
  favorites: any[];
};

export type WordsState = {
  currentPage: number;
  words: string[];
};
