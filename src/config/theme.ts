import { Theme, theme as defaultTheme, extendTheme } from "native-base";

export default extendTheme<Theme>({
  ...defaultTheme,
});
