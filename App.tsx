import {
  Urbanist_300Light,
  Urbanist_500Medium,
  Urbanist_700Bold,
} from "@expo-google-fonts/urbanist";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NativeBaseProvider } from "native-base";
import { useCallback, useEffect, useState } from "react";
import { LogBox, StatusBar, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux";

import AppStack from "./src/navigator/AppStack";
import theme from "./src/config/theme";

SplashScreen.preventAutoHideAsync();
LogBox.ignoreLogs(["In React 18"]);

export default function App() {
  const [isAppReady, setAppReady] = useState(false);

  async function _loadAssetsAsync() {
    await Font.loadAsync({
      Urbanist_300Light,
      Urbanist_500Medium,
      Urbanist_700Bold,
    });
    setAppReady(true);
  }

  useEffect(() => {
    _loadAssetsAsync();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isAppReady) {
      await SplashScreen.hideAsync();
    }
  }, [isAppReady]);

  if (!isAppReady) {
    return null;
  }
  return (
    <Provider store={store}>
      <NativeBaseProvider
        theme={theme}
        config={{
          dependencies: {
            "linear-gradient": require("expo-linear-gradient").LinearGradient,
          },
        }}
      >
        <NavigationContainer>
          <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            <AppStack />
          </View>
          <StatusBar
            translucent
            backgroundColor={"#FFFFFF00"}
            barStyle={"light-content"}
          />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
