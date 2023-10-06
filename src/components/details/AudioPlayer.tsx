import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon, Pressable } from "native-base";
import { Audio } from "expo-av";
import * as Speech from "expo-speech";
import { AudioPlayerProps } from "../../types";

export default function AudioPlayer({ audio, type }: AudioPlayerProps) {
  const playSound = async () => {
    if (type === "url") {
      const { sound } = await Audio.Sound.createAsync({ uri: audio });
      await sound.playAsync();
      // sound.unloadAsync();
    } else {
      Speech.speak(audio, {
        language: "en",
      });
    }
  };
  return (
    <Pressable
      onPress={playSound}
      _pressed={{ opacity: 0.3 }}
      borderWidth={2}
      borderColor={"primary.300"}
      borderRadius={"full"}
      h={10}
      w={10}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Icon
        size={"2xl"}
        as={<MaterialCommunityIcons name={"play"} />}
        color={"primary.400"}
      />
    </Pressable>
  );
}
