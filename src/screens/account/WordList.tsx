import { Center, Spinner, VStack, useTheme } from "native-base";
import { useEffect } from "react";
import { PageHeader, Text, WordFlatList } from "../../components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getWords } from "../../redux";

export default function WordList() {
  const { words, currentPage } = useAppSelector((state) => state.words);
  const { isLoading } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  const { colors } = useTheme();

  useEffect(() => {
    dispatch(getWords({ currentPage }));
  }, [currentPage]);

  return (
    <VStack flex={1}>
      <PageHeader />
      <VStack p={3}>
        <Text fontFamily={"bold"} fontSize={"2xl"}>
          Word List
        </Text>
        <Text fontSize={"lg"} textAlign={"justify"}>
          Touch in a word to see its meaning and pronunciation
        </Text>
      </VStack>
      <WordFlatList currentPage={currentPage} words={words} />
      {isLoading && (
        <Center flexGrow={1}>
          <Spinner color={colors.primary[200]} size={50} />
          <Text color={"primary.200"} fontFamily={"bold"} fontSize={"lg"}>
            Loading...
          </Text>
        </Center>
      )}
    </VStack>
  );
}
