import { VStack } from "native-base";
import {
  LoadingMini,
  NoContent,
  PageHeader,
  Text,
  WordFlatList,
} from "../../components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getFavoritesAction } from "../../redux/actions/account";
import { useEffect } from "react";

export default function Favorites() {
  const { favorites } = useAppSelector((state) => state.account);
  const { isLoading } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFavoritesAction());
  }, []);
  return (
    <VStack flex={1}>
      <PageHeader />
      <VStack py={3} px={5}>
        <Text fontFamily={"bold"} fontSize={"2xl"}>
          Favorites
        </Text>
        <Text fontSize={"lg"} textAlign={"justify"}>
          {
            "In here, you'll see all your favorite words, press in a word to see its meaning and pronunciation."
          }
        </Text>
      </VStack>
      {favorites.length > 0 && (
        <WordFlatList currentPage={null} words={favorites} />
      )}
      {!isLoading && !favorites.length && (
        <NoContent
          text={`You haven't added a word to your favourites yet. Press on the star in the word details to add it here`}
        />
      )}
      {isLoading && <LoadingMini />}
    </VStack>
  );
}
