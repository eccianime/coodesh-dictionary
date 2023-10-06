import { VStack } from "native-base";
import { useEffect } from "react";
import { LoadingMini, PageHeader, Text, WordFlatList } from "../../components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getWords } from "../../redux";

export default function WordList() {
  const { words, currentPage } = useAppSelector((state) => state.words);
  const { isLoading } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWords({ currentPage }));
  }, [currentPage]);

  return (
    <VStack flex={1}>
      <PageHeader />
      <VStack py={3} px={5}>
        <Text fontFamily={"bold"} fontSize={"2xl"}>
          Word List
        </Text>
        <Text fontSize={"lg"} textAlign={"justify"}>
          Press on a word to see its meaning and pronunciation
        </Text>
      </VStack>
      {words.length > 0 && (
        <WordFlatList currentPage={currentPage} words={words} />
      )}
      {isLoading && <LoadingMini />}
    </VStack>
  );
}
