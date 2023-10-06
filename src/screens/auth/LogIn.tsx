import { Center, Pressable, VStack } from "native-base";
import { useState } from "react";
import {
  Button,
  Input,
  Loading,
  LogoHeader,
  Modal,
  Text,
} from "../../components";
import { useAppDispatch, useAppNavigation, useAppSelector } from "../../hooks";
import { appSelector, loginAction } from "../../redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function LogIn() {
  const [formData, setFormData] = useState({
    email: "asd1@asd.com",
    password: "12345678",
  });
  const dispatch = useAppDispatch();
  const { navigate } = useAppNavigation();

  const { isLoading, isModalVisible, modalText, modalType } =
    useAppSelector(appSelector);

  const handleLogin = () => dispatch(loginAction(formData));
  const handleGoRegister = () => navigate("Auth", { screen: "Register" });

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <LogoHeader />
      <VStack px={3}>
        <Text textAlign={"center"} fontSize={"3xl"} fontFamily={"bold"}>
          Log in the app
        </Text>
        <Text textAlign={"center"} fontSize={"md"} mb={5}>
          {"Enter your e-mail and \npassword to log in the app"}
        </Text>
        <Input
          value={formData.email}
          onChangeText={(email) => setFormData({ ...formData, email })}
          placeholder="Enter your e-mail"
          mb={3}
          keyboardType="email-address"
        />
        <Input
          value={formData.password}
          onChangeText={(password) => setFormData({ ...formData, password })}
          placeholder="Enter your password"
          secureTextEntry
          mb={3}
        />
        <Center>
          <Button text="Log In" isOutline onPress={handleLogin} />
          <Pressable onPress={handleGoRegister}>
            <Text textAlign={"center"} fontSize={"md"} mb={5}>
              {"Don't have an account? "}
              <Text fontFamily={"bold"} color={"primary.300"} fontSize={"md"}>
                Create one here
              </Text>
            </Text>
          </Pressable>
        </Center>
      </VStack>
      {isLoading && <Loading />}
      <Modal isVisible={isModalVisible} text={modalText} type={modalType} />
    </KeyboardAwareScrollView>
  );
}
