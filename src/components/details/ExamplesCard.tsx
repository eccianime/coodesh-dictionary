import { VStack } from "native-base";
import { ExamplesCardProps } from "../../types";
import Text from "../basic/Text";

export default function ExamplesCard({ examples }: ExamplesCardProps) {
  return (
    <VStack>
      <Text mt={2} fontFamily={"bold"} fontSize={"xl"}>
        Examples:
      </Text>
      {examples.map((ex, i) => (
        <Text key={`ex-${i}`} fontStyle={"italic"}>{`Ex.${i}: ${ex}`}</Text>
      ))}
    </VStack>
  );
}
