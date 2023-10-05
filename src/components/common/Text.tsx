import { Text as NBText } from "native-base";
import { FONTS } from "../../config/theme";
import { TextProps } from "../../types";

export default function Text(props: TextProps) {
  return (
    <NBText
      fontSize={"sm"}
      allowFontScaling={false}
      color={"black"}
      {...props}
      fontFamily={
        props.fontFamily === "bold"
          ? FONTS.Bold
          : props.fontFamily === "light"
          ? FONTS.Light
          : FONTS.Medium
      }
    />
  );
}
