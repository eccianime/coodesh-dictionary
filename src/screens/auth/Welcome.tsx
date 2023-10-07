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
          Welcome!
        </Text>
        <Text textAlign={"center"} fontSize={"md"} mb={5}>
          {"Create your account or log in the app"}
        </Text>
        <Button
          text="Create Account"
          onPress={() => navigate("Auth", { screen: "Register" })}
        />
        <Button
          text="Log In"
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
