import { Center, FlatList, Pressable, VStack } from "native-base";
import { memo } from "react";
import { useAppDispatch, useAppNavigation } from "../../hooks";
import { setCurrentPage } from "../../redux";
import { WordFlatListProps } from "../../types";
import Text from "../basic/Text";

function WordFlatList({ words, currentPage }: WordFlatListProps) {
  const dispatch = useAppDispatch();
  const { navigate } = useAppNavigation();

  const onWordPressCallback = (word: string) => {
    navigate("Details", { word });
  };

  return (
    <FlatList
      keyExtractor={(item) => item}
      data={[...words, ...Array(words.length % 3).fill("")]}
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: 20,
      }}
      numColumns={3}
      onEndReachedThreshold={0.7}
      onEndReached={() => {
        if (typeof currentPage === "number") {
          dispatch(setCurrentPage(currentPage + 1));
        }
      }}
      renderItem={({ item: word, index }) => (
        <VStack flex={1} mb={2} mr={index % 3 === 2 ? 0 : 2}>
          {word.length > 0 && (
            <Pressable
              _pressed={{ opacity: 0.3 }}
              bg={"primary.300"}
              borderRadius={"md"}
              onPress={() => onWordPressCallback(word)}
            >
              <Center h={10}>
                <Text fontSize={"lg"} color={"white"} numberOfLines={1}>
                  {word}
                </Text>
              </Center>
            </Pressable>
          )}
        </VStack>
      )}
    />
  );
}

export default memo(WordFlatList);
