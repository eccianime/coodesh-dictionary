import { Center, FlatList, Pressable } from "native-base";
import { memo } from "react";
import Text from "../basic/Text";
import { useAppDispatch, useAppNavigation } from "../../hooks";
import { setCurrentPage } from "../../redux";
import { WordFlatListProps } from "../../types";

function WordFlatList({ words, currentPage }: WordFlatListProps) {
  const dispatch = useAppDispatch();
  const { navigate } = useAppNavigation();

  return (
    <FlatList
      keyExtractor={(item) => item}
      data={words}
      contentContainerStyle={{
        flexGrow: 1,
      }}
      numColumns={3}
      onEndReachedThreshold={0.7}
      onEndReached={() => {
        dispatch(setCurrentPage(currentPage + 1));
      }}
      renderItem={({ item: word }) => (
        <Pressable
          _pressed={{ opacity: 0.3 }}
          flex={1}
          bg={"primary.300"}
          mb={2}
          mx={2}
          borderRadius={"md"}
          onPress={() => navigate("Details", { word })}
        >
          <Center h={10}>
            <Text fontSize={"lg"} color={"white"} numberOfLines={1}>
              {word}
            </Text>
          </Center>
        </Pressable>
      )}
    />
  );
}

export default memo(WordFlatList);
