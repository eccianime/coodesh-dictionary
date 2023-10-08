import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import { useAppSelector } from "../hooks";
import { AppParamList } from "../types";
import AccountTab from "./AccountTab";
import AuthStack from "./AuthStack";
import Details from "../screens/details/WordDetails";
import { Modal } from "../components";

const { Navigator, Screen } = createStackNavigator<AppParamList>();

export default function AppStack() {
  const { currentUser } = useAppSelector((state) => state.account);
  const { isModalVisible, modalText, modalType } = useAppSelector(
    (state) => state.app
  );
  return (
    <>
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
      <Modal isVisible={isModalVisible} text={modalText} type={modalType} />
    </>
  );
}
