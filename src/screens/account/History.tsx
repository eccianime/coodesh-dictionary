import { VStack } from "native-base";
import {
  LoadingMini,
  NoContent,
  PageHeader,
  Text,
  WordFlatList,
} from "../../components";
import { useAppSelector } from "../../hooks";

export default function History() {
  const { history } = useAppSelector((state) => state.account);
  const { isLoading } = useAppSelector((state) => state.app);

  return (
    <VStack flex={1}>
      <PageHeader />
      <VStack py={3} px={5}>
        <Text fontFamily={"bold"} fontSize={"2xl"}>
          History
        </Text>
        <Text fontSize={"lg"} textAlign={"justify"}>
          {
            "In here, you'll see all already seen words, press in a word to see its meaning and pronunciation."
          }
        </Text>
      </VStack>
      {!isLoading && history.length > 0 && (
        <WordFlatList currentPage={null} words={history.slice().reverse()} />
      )}
      {!isLoading && !history.length && (
        <NoContent
          text={`You haven't opened any word, press on one to add it here!`}
        />
      )}
      {isLoading && <LoadingMini />}
    </VStack>
  );
}
