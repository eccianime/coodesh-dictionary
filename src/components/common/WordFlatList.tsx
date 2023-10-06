import { Center, Pressable, VStack } from "native-base";
import { FlashList } from "@shopify/flash-list";
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
    <FlashList
      showsVerticalScrollIndicator={false}
      data={[...words, ...Array(words.length % 3).fill("")]}
      contentContainerStyle={{
        paddingHorizontal: 20,
      }}
      estimatedItemSize={50}
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
              px={3}
              onPress={() => onWordPressCallback(word)}
            >
              <Center h={10}>
                <Text color={"white"} numberOfLines={1}>
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
