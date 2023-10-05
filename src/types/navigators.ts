import { StackNavigationProp } from "@react-navigation/stack";

export type AppParamList = {
  Auth: undefined;
  Account: undefined;
  Details: undefined;
};

export type AppNavigation = StackNavigationProp<AppParamList>;
