import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import { useAppSelector } from "../hooks";
import { AppParamList } from "../types";
import AccountTab from "./AccountTab";
import AuthStack from "./AuthStack";
import Details from "../screens/Details/WordDetails";

const { Navigator, Screen } = createStackNavigator<AppParamList>();

export default function AppStack() {
  const { currentUser } = useAppSelector((state) => state.auth);
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {currentUser ? (
        <>
          <Screen name="Account" component={AccountTab} />
          <Screen name="Details" component={Details} />
        </>
      ) : (
        <Screen name="Auth" component={AuthStack} />
      )}
    </Navigator>
  );
}
