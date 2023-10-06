import { AntDesign } from "@expo/vector-icons";
import { HStack, Icon, Pressable, VStack } from "native-base";
import Text from "../basic/Text";
import { useAppDispatch, useAppSelector } from "../../hooks";
import LogoSVG from "../../assets/svg/logo.svg";
import { logoutAction } from "../../redux";

export default function PageHeader() {
  const { currentUser } = useAppSelector((state) => state.account);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logoutAction());
  };
  return (
    <HStack
      bg={{
        linearGradient: {
          colors: ["primary.100", "primary.300", "primary.500"],
          start: [0, 0],
          end: [1, 1],
        },
      }}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={4}
      py={3}
    >
      <HStack alignItems={"center"}>
        <LogoSVG color={"white"} width={50} height={50 * 0.86} />
        <VStack ml={3}>
          <Text fontSize="md" color={"white"}>
            Logged in as:
          </Text>
          <Text fontSize="md" color={"white"} fontFamily={"bold"}>
            {currentUser?.email}
          </Text>
        </VStack>
      </HStack>
      <Pressable
        onPress={handleLogout}
        _pressed={{
          opacity: 0.3,
        }}
        justifyContent={"center"}
        alignItems={"center"}
        borderWidth={1}
        borderRadius={"full"}
        borderColor={"white"}
        w={10}
        h={10}
      >
        <Icon
          size={"md"}
          as={<AntDesign name={"poweroff"} />}
          color={"white"}
        />
      </Pressable>
    </HStack>
  );
}
