import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Center, Icon } from "native-base";
import { NoContentProps } from "../../types";
import Text from "../basic/Text";

export default function NoContent({ text }: NoContentProps) {
  return (
    <Center flexGrow={1} py={3} px={5}>
      <Icon
        size={100}
        as={<MaterialCommunityIcons name={"emoticon-sad-outline"} />}
        color={"primary.400"}
      />
      <Text
        fontSize={"xl"}
        fontFamily={"bold"}
        color={"primary.400"}
        textAlign={"center"}
      >
        {text}
      </Text>
    </Center>
  );
}
