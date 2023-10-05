import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { WordList, Favorites, History } from "../screens/account";

const { Navigator, Screen } = createBottomTabNavigator();

export default function AccountTab() {
  return (
    <Navigator>
      <Screen name="Word List" component={WordList} />
      <Screen name="Favorites" component={Favorites} />
      <Screen name="History" component={History} />
    </Navigator>
  );
}
