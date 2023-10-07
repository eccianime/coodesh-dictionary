import { IPressableProps, ITextProps } from "native-base";
import { MeaningsProps, WordAndPhoneticsProps } from "./store";

export type TextProps = ITextProps & {
  fontFamily?: "bold" | "light" | "medium";
};

export type ButtonProps = IPressableProps & {
  text: string;
  isOutline?: boolean;
  onPress?: VoidFunction;
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

export type WordAndPhoneticCardProps = WordAndPhoneticsProps;

export type MeaningCardProps = {
  meanings: MeaningsProps[];
};

export type ExamplesCardProps = {
  examples: (string | undefined)[];
};

export type AudioPlayerProps = {
  audio: string;
  type: "url" | "local";
};
