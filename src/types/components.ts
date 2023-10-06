import { ITextProps } from "native-base";

export type TextProps = ITextProps & {
  fontFamily?: "bold" | "light" | "medium";
};

export type ModalProps = {
  type: "success" | "error" | "";
  text: string;
  isVisible: boolean;
};

export type WordFlatListProps = {
  currentPage: number | null;
  words: string[];
};

export type DetailsHeaderProps = {
  word: string;
};

export type NoContentProps = {
  text: string;
};
