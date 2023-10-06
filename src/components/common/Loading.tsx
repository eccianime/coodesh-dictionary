import { Center, Spinner, useTheme } from "native-base";
import Text from "../basic/Text";

export default function Loading() {
  const { colors } = useTheme();
  return (
    <Center
      position={"absolute"}
      top={0}
      right={0}
      left={0}
      bottom={0}
      bg={"rgba(255,255,255,.9)"}
    >
      <Spinner color={colors.primary[200]} size={100} />
      <Text color={"primary.200"} fontFamily={"bold"} fontSize={"lg"}>
        Loading...
      </Text>
    </Center>
  );
}
