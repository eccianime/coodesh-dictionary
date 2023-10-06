import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { WordList, Favorites, History } from "../screens/account";

const { Navigator, Screen } = createBottomTabNavigator();

export default function AccountTab() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      sceneContainerStyle={{
        backgroundColor: "white",
      }}
    >
      <Screen name="Word List" component={WordList} />
      <Screen name="History" component={History} />
      <Screen name="Favorites" component={Favorites} />
    </Navigator>
  );
}
