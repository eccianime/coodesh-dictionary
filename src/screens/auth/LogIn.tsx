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
    <VStack flex={1}>
      <LogoHeader />
      <VStack px={3}>
        <Text textAlign={"center"} fontSize={"3xl"} fontFamily={"bold"}>
          Entrar no sistema
        </Text>
        <Text textAlign={"center"} fontSize={"md"} mb={5}>
          {"Insira seu e-mail e \nsenha para entrar no sistema"}
        </Text>
        <Input
          value={formData.email}
          onChangeText={(email) => setFormData({ ...formData, email })}
          placeholder="Insira seu e-mail"
          mb={3}
          keyboardType="email-address"
        />
        <Input
          value={formData.password}
          onChangeText={(password) => setFormData({ ...formData, password })}
          placeholder="Insira sua senha"
          secureTextEntry
          mb={3}
        />
        <Center>
          <Button text="Entrar" isOutline onPress={handleLogin} />
          <Pressable onPress={handleGoRegister}>
            <Text textAlign={"center"} fontSize={"md"} mb={5}>
              {"Não tem conta? "}
              <Text fontFamily={"bold"} color={"primary.300"} fontSize={"md"}>
                Crie uma aqui
              </Text>
            </Text>
          </Pressable>
        </Center>
      </VStack>
      {isLoading && <Loading />}
      <Modal isVisible={isModalVisible} text={modalText} type={modalType} />
    </VStack>
  );
}
