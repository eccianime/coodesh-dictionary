import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { WordList, Favorites, History } from "../screens/account";
import { AccountParamList } from "../types";
import { Icon, Center, useTheme } from "native-base";
import { Text } from "../components";

const { Navigator, Screen } = createBottomTabNavigator<AccountParamList>();

export default function AccountTab() {
  const { colors } = useTheme();
  const getLabelFromName = (name: keyof AccountParamList, focused: boolean) => {
    let iconName: keyof typeof AntDesign.glyphMap;
    switch (name) {
      case "Word List":
        iconName = focused ? "appstore1" : "appstore-o";
        break;
      case "History":
        iconName = focused ? "clockcircle" : "clockcircleo";
        break;
      case "Favorites":
        iconName = focused ? "star" : "staro";
        break;
    }
    return (
      <Center mb={2}>
        <Icon
          size={"md"}
          as={<AntDesign name={iconName} />}
          color={focused ? "white" : "gray.300"}
        />
        <Text
          fontFamily={focused ? "bold" : "medium"}
          color={focused ? "white" : "gray.300"}
        >
          {name}
        </Text>
      </Center>
    );
  };
  return (
    <Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 60,
          borderTopWidth: 0,
          backgroundColor: colors.primary[500],
        },
        tabBarIcon: () => null,
        tabBarLabel: ({ focused }) => getLabelFromName(route.name, focused),
      })}
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
