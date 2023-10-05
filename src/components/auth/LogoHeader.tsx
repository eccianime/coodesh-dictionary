import { Center, VStack } from "native-base";
import LogoSVG from "../../assets/svg/logo.svg";
import WaveSVG from "../../assets/svg/wave.svg";
import { SCREEN_WIDTH } from "../../config/theme";

export default function LogoHeader() {
  return (
    <Center
      pt={10}
      pb={20}
      bg={{
        linearGradient: {
          colors: ["primary.100", "primary.300", "primary.500"],
          start: [0, 0],
          end: [1, 1],
        },
      }}
    >
      <LogoSVG color="white" width={300} height={300 * 0.86} />
      <VStack position={"absolute"} left={0} bottom={-1}>
        <WaveSVG width={SCREEN_WIDTH} height={SCREEN_WIDTH * 0.17} />
      </VStack>
    </Center>
  );
}
