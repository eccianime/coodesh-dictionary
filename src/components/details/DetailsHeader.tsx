import { AntDesign } from "@expo/vector-icons";
import { HStack, Icon, Pressable, VStack } from "native-base";
import { useAppDispatch, useAppNavigation, useAppSelector } from "../../hooks";
import { DetailsHeaderProps } from "../../types";
import Text from "../basic/Text";
import { accountSelector } from "../../redux";
import { addFavoriteAction } from "../../redux/actions/account";

export default function DetailsHeader({ word }: DetailsHeaderProps) {
  const { goBack } = useAppNavigation();
  const { favorites } = useAppSelector(accountSelector);
  const dispatch = useAppDispatch();

  const handleAddFavorite = () => {
    dispatch(
      addFavoriteAction({
        word,
        isFavorite: favorites.findIndex((item) => item === word) > -1,
      })
    );
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
        <Pressable
          onPress={goBack}
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
            as={<AntDesign name={"arrowleft"} />}
            color={"white"}
          />
        </Pressable>

        <VStack ml={3}>
          <Text fontSize="md" color={"white"}>
            Target Word:
          </Text>
          <Text fontSize="md" color={"white"} fontFamily={"bold"}>
            {word}
          </Text>
        </VStack>
      </HStack>
      <Pressable
        onPress={handleAddFavorite}
        _pressed={{
          opacity: 0.3,
        }}
        justifyContent={"center"}
        alignItems={"center"}
        w={10}
        h={10}
      >
        <Icon
          size={"3xl"}
          as={
            <AntDesign
              name={
                favorites.findIndex((fav) => fav === word) > -1
                  ? "star"
                  : "staro"
              }
            />
          }
          color={"white"}
        />
      </Pressable>
    </HStack>
  );
}
