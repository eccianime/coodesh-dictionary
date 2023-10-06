import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import { useAppSelector } from "../hooks";
import { AppParamList } from "../types";
import AccountTab from "./AccountTab";
import AuthStack from "./AuthStack";
import Details from "../screens/details/WordDetails";

const { Navigator, Screen } = createStackNavigator<AppParamList>();

export default function AppStack() {
  const { currentUser } = useAppSelector((state) => state.account);
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "white",
        },
      }}
    >
      {!currentUser ? (
        <Screen name="Auth" component={AuthStack} />
      ) : (
        <>
          <Screen name="Account" component={AccountTab} />
          <Screen name="Details" component={Details} />
        </>
      )}
    </Navigator>
  );
}
