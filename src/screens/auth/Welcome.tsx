import { Center, VStack } from "native-base";
import { Button, LogoHeader, Text } from "../../components";
import { useAppNavigation } from "../../hooks";

export default function Welcome() {
  const { navigate } = useAppNavigation();
  return (
    <VStack flex={1}>
      <LogoHeader />
      <Center flex={1} mb={30}>
        <Text fontSize={"3xl"} fontFamily={"bold"}>
          Bem-vindo
        </Text>
        <Text textAlign={"center"} fontSize={"md"} mb={5}>
          {"Crie sua conta ou entre no aplicativo"}
        </Text>
        <Button
          text="Criar Conta"
          onPress={() => navigate("Auth", { screen: "Register" })}
        />
        <Button
          text="Ja tenho conta"
          isOutline
          onPress={() => navigate("Auth", { screen: "Log In" })}
        />
      </Center>
      <Text fontFamily={"light"} mb={5} textAlign={"center"}>
        React Native Coodesh Challenge - 2023
      </Text>
    </VStack>
  );
}
