import { IInputProps, Input as NBINput } from "native-base";
import { FONTS } from "../../config/theme";

export default function Input(props: IInputProps) {
  return (
    <NBINput
      borderRadius={"full"}
      borderWidth={0}
      bg={"gray.100"}
      fontFamily={FONTS.Medium}
      fontSize={"sm"}
      px={4}
      py={2}
      color={"black"}
      allowFontScaling={false}
      autoCapitalize="none"
      _focus={{
        borderWidth: 2,
        borderColor: "gray.300",
        bg: "gray.100",
      }}
      {...props}
    />
  );
}
