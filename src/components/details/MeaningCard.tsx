import { VStack } from "native-base";
import Text from "../basic/Text";
import { MeaningCardProps } from "../../types";
import ExamplesCard from "./ExamplesCard";

export default function MeaningCard({ meanings }: MeaningCardProps) {
  const examples = meanings
    .map((meaning) => meaning.definitions.map((def) => def.example))
    .flat(1)
    .filter((item) => item);

  return (
    <VStack mb={4}>
      <Text mt={2} fontFamily={"bold"} fontSize={"xl"}>
        Meanings:
      </Text>
      {meanings.map((meaning, i) => (
        <VStack key={`meaning-${i}`}>
          <Text mt={2} fontStyle={"italic"} fontFamily={"bold"} fontSize={"md"}>
            {meaning.partOfSpeech}.
          </Text>
          {meaning.definitions.map((def, i) => (
            <Text key={`meaning-${i}-def-${i}`}>{`- ` + def.definition}</Text>
          ))}
        </VStack>
      ))}
      {examples?.length > 0 && <ExamplesCard examples={examples} />}
    </VStack>
  );
}
