import {
  Center,
  FlatList,
  Pressable,
  Spinner,
  VStack,
  useTheme,
} from "native-base";
import { useEffect } from "react";
import { Text } from "../../components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getWords, setCurrentPage } from "../../redux";

export default function WordList() {
  const { words, currentPage } = useAppSelector((state) => state.words);
  const { isLoading } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const { colors } = useTheme();

  useEffect(() => {
    dispatch(getWords({ currentPage }));
  }, [currentPage]);

  console.log(
    "currentPage: ",
    currentPage,
    "isLoading: ",
    isLoading,
    "words:",
    words.length
  );
  return (
    <VStack flexGrow={1}>
      {/* <WordFlatList page={currentPage} /> */}
      <FlatList
        keyExtractor={(item) => item}
        data={words}
        numColumns={3}
        onEndReachedThreshold={0.7}
        onEndReached={() => {
          console.log(">>>>>>>>>>>>>>> onEndReached");
          dispatch(setCurrentPage(currentPage + 1));
        }}
        ListFooterComponent={() =>
          isLoading && (
            <Center flexGrow={1}>
              <Spinner color={colors.primary[200]} size={50} />
              <Text color={"primary.200"} fontFamily={"bold"} fontSize={"lg"}>
                Carregando...
              </Text>
            </Center>
          )
        }
        renderItem={({ item }) => (
          <Pressable _pressed={{ opacity: 0.3 }} w={"1/3"}>
            <Center h={10}>
              <Text numberOfLines={1}>{item}</Text>
            </Center>
          </Pressable>
        )}
      />
    </VStack>
  );
}
