import { Center, Pressable, VStack } from "native-base";
import { useState } from "react";
import { Button, Input, LogoHeader, Text } from "../../components";
import { useAppNavigation } from "../../hooks";

export default function LogIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { navigate } = useAppNavigation();
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
          <Button text="Entrar" isOutline />
          <Pressable onPress={() => navigate("Auth", { screen: "Register" })}>
            <Text textAlign={"center"} fontSize={"md"} mb={5}>
              {"Não tem conta? "}
              <Text fontFamily={"bold"} color={"primary.300"} fontSize={"md"}>
                Crie uma aqui
              </Text>
            </Text>
          </Pressable>
        </Center>
      </VStack>
    </VStack>
  );
}
