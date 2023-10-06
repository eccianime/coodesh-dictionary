import { Center, VStack } from "native-base";
import { WordAndPhoneticCardProps } from "../../types";
import Text from "../basic/Text";
import AudioPlayer from "./AudioPlayer";

export default function WordAndPhoneticCard({
  word,
  phonetic,
  phonetics,
}: WordAndPhoneticCardProps) {
  return (
    <>
      <Center
        mb={1}
        py={5}
        bg={{
          linearGradient: {
            colors: ["primary.100", "primary.300", "primary.500"],
            start: [0, 0],
            end: [1, 1],
          },
        }}
        borderRadius={"md"}
      >
        <Text color={"white"} fontSize={"3xl"}>
          {word}
        </Text>
        {phonetic && phonetic?.length > 0 ? (
          <Text color={"white"} fontSize={"xl"}>
            {phonetic}
          </Text>
        ) : (
          phonetics?.length > 0 &&
          phonetics.map((ph, i) => (
            <VStack key={`${i}-${ph.text}`}>
              <Text color={"white"} fontSize={"xl"}>
                {ph.text}
              </Text>
            </VStack>
          ))
        )}
      </Center>
      {phonetics?.length > 0 && (
        <AudioPlayer
          type={
            phonetics.find((ph) => ph.audio && ph.audio?.length > 0)
              ? "url"
              : "local"
          }
          audio={
            phonetics.find((ph) => ph.audio && ph.audio?.length > 0)?.audio ||
            word
          }
        />
      )}
      {!phonetics?.length && !phonetic && (
        <AudioPlayer type={"local"} audio={word} />
      )}
    </>
  );
}
