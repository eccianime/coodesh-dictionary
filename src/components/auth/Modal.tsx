import { Ionicons } from "@expo/vector-icons";
import { Center, Icon, Modal as NBModal, VStack } from "native-base";
import { ModalProps } from "../../types";
import Text from "../common/Text";
import Button from "../common/Button";
import { useDispatch } from "react-redux";
import { setModal } from "../../redux";

export default function Modal({ isVisible, text, type }: ModalProps) {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(
      setModal({
        isVisible: false,
        text: "",
        type: "",
      })
    );
  };
  return (
    <NBModal isOpen={isVisible} animationPreset="fade" px={5}>
      <VStack bg={"white"} borderRadius={"3xl"} p={5} w={"full"}>
        <Center mb={3}>
          <Icon
            color={type === "success" ? "green.500" : "red.500"}
            size={100}
            as={
              <Ionicons
                name={
                  type === "success"
                    ? "checkmark-circle-outline"
                    : "close-circle-outline"
                }
              />
            }
          />
          <Text
            fontSize={"2xl"}
            fontFamily={"bold"}
            color={type === "success" ? "green.500" : "red.500"}
            textAlign={"center"}
            mb={4}
          >
            {type === "success" ? "Sucesso!" : "Ocorreu um erro!"}
          </Text>
          <Text fontSize={"md"} textAlign={"center"} mb={4}>
            {text}
          </Text>
        </Center>
        <VStack alignItems={"center"}>
          <Button text="Fechar" onPress={closeModal} />
        </VStack>
      </VStack>
    </NBModal>
  );
}
