import { NavigatorScreenParams } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type AuthParamList = {
  Welcome: undefined;
  "Log In": undefined;
  Register: undefined;
};

export type AccountParamList = {
  "Word List": undefined;
  Favorites: undefined;
  History: undefined;
};

export type AppParamList = {
  Auth: NavigatorScreenParams<AuthParamList>;
  Account: NavigatorScreenParams<AccountParamList>;
  Details: { word: string };
};

export type AppNavigation = StackNavigationProp<AppParamList>;
