import { createStackNavigator } from "@react-navigation/stack";

import { Welcome, LogIn, Register } from "../screens/auth";
const { Navigator, Screen } = createStackNavigator();

export default function AuthStack() {
  return (
    <Navigator>
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Log In" component={LogIn} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
}
