import { Center, Spinner, useTheme } from "native-base";
import Text from "../basic/Text";

export default function LoadingMini() {
  const { colors } = useTheme();
  return (
    <Center>
      <Spinner color={colors.primary[200]} size={50} />
      <Text color={"primary.200"} fontFamily={"bold"} fontSize={"lg"}>
        Loading...
      </Text>
    </Center>
  );
}
