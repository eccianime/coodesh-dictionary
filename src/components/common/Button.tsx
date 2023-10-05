import { Center, Pressable, VStack } from "native-base";
import Text from "./Text";

type ButtonProps = {
  text: string;
  isOutline?: boolean;
  onPress?: VoidFunction;
};

export default function Button({ text, isOutline, onPress }: ButtonProps) {
  return (
    <Pressable w={"4/5"} _pressed={{ opacity: 0.2 }} mb={3} onPress={onPress}>
      <Center
        borderRadius={"full"}
        py={0.5}
        px={0.5}
        bg={{
          linearGradient: {
            colors: ["primary.100", "primary.200", "primary.300"],
            start: [0, 0],
            end: [1, 1],
          },
        }}
      >
        <VStack
          py={2}
          px={2}
          borderRadius={"full"}
          w={"full"}
          alignItems={"center"}
          bg={isOutline ? "white" : "transparent"}
        >
          <Text
            color={isOutline ? "primary.400" : "white"}
            fontFamily={"bold"}
            fontSize={"lg"}
          >
            {text}
          </Text>
        </VStack>
      </Center>
    </Pressable>
  );
}
