import { Ionicons } from "@expo/vector-icons";
import {
  Center,
  HStack,
  Icon,
  IconButton,
  Pressable,
  VStack,
} from "native-base";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Button,
  Input,
  Loading,
  LogoHeader,
  Modal,
  Text,
} from "../../components";
import { useAppDispatch, useAppNavigation, useAppSelector } from "../../hooks";
import { appSelector, registerAction } from "../../redux";

export default function Register() {
  const { navigate } = useAppNavigation();
  const { isLoading, isModalVisible, modalText, modalType } =
    useAppSelector(appSelector);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [isPassVisible, setPassVisible] = useState(false);

  const dispatch = useAppDispatch();
  const handleRegister = () => dispatch(registerAction(formData));

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <LogoHeader />
      <VStack px={3}>
        <Text textAlign={"center"} fontSize={"3xl"} fontFamily={"bold"}>
          Criar Conta
        </Text>
        <Text textAlign={"center"} fontSize={"md"} mb={5}>
          {"Insira seu e-mail e uma\nsenha para se cadastrar no sistema"}
        </Text>
        <Input
          value={formData.email}
          onChangeText={(email) => setFormData({ ...formData, email })}
          placeholder="Insira seu e-mail"
          mb={3}
          keyboardType="email-address"
        />
        <HStack alignItems={"center"} mb={3}>
          <Input
            value={formData.password}
            onChangeText={(password) => setFormData({ ...formData, password })}
            placeholder="Insira sua senha"
            secureTextEntry={!isPassVisible}
          />
          <IconButton
            onPress={() => setPassVisible(!isPassVisible)}
            colorScheme={"darkBlue"}
            borderRadius={"full"}
            position={"absolute"}
            right={3}
            icon={
              <Icon
                as={<Ionicons name={isPassVisible ? "eye-off" : "eye"} />}
              />
            }
          />
        </HStack>
        <HStack alignItems={"center"} mb={3}>
          <Input
            value={formData.repeatPassword}
            onChangeText={(repeatPassword) =>
              setFormData({ ...formData, repeatPassword })
            }
            placeholder="Repita sua senha"
            secureTextEntry={!isPassVisible}
          />
          <IconButton
            onPress={() => setPassVisible(!isPassVisible)}
            colorScheme={"darkBlue"}
            borderRadius={"full"}
            position={"absolute"}
            right={3}
            icon={
              <Icon
                as={<Ionicons name={isPassVisible ? "eye-off" : "eye"} />}
              />
            }
          />
        </HStack>
        <Center>
          <Button text="Criar Conta" isOutline onPress={handleRegister} />
          <Pressable onPress={() => navigate("Auth", { screen: "Log In" })}>
            <Text textAlign={"center"} fontSize={"md"} mb={5}>
              {"Ja tem conta? "}
              <Text fontFamily={"bold"} color={"primary.300"} fontSize={"md"}>
                Entre Aqui
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
