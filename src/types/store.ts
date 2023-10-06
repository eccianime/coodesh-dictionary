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
  favorites: string[];
  history: string[];
};

// REMOVER

type DefinitionProps = {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
};

type MeaningsProps = {
  partOfSpeech: string;
  definitions: DefinitionProps[];
  synonyms?: string[];
  antonyms?: string;
};

export type WordDetailsProps = {
  word: string;
  phonetic?: string;
  phonetics: {
    text: string;
    audio?: string;
  };
  meanings: MeaningsProps[];
};

export type WordsState = {
  currentPage: number;
  words: string[];
  wordDetails?: WordDetailsProps[];
};
