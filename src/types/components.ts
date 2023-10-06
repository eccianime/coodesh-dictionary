import { ITextProps } from "native-base";

export type TextProps = ITextProps & {
  fontFamily?: "bold" | "light";
};

export type ModalProps = {
  type: "success" | "error" | "";
  text: string;
  isVisible: boolean;
};
