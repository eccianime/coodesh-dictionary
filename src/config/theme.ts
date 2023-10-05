import { extendTheme } from "native-base";
import { Dimensions } from "react-native";

export const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default extendTheme({
  colors: {
    primary: {
      100: "#93A4E2",
      200: "#6E80BC",
      300: "#4A5F97",
      400: "#253F73",
      500: "#002252",
    },
    black: "#212121",
  },
  space: {
    30: 120,
  },
});

export const FONTS = {
  Light: "Urbanist_300Light",
  Medium: "Urbanist_500Medium",
  Bold: "Urbanist_700Bold",
};
