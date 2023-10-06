import { useRoute } from "@react-navigation/native";
import { ScrollView, VStack } from "native-base";
import { useEffect } from "react";
import { DetailsHeader, Loading, NoContent, Text } from "../../components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getWordDetails, setWordDetails } from "../../redux";
import { AppParamList } from "../../types";

export default function WordDetails() {
  const { word } = useRoute().params as AppParamList["Details"];

  const { isLoading } = useAppSelector((state) => state.app);
  const { wordDetails } = useAppSelector((state) => state.words);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWordDetails({ word }));
    return () => {
      dispatch(setWordDetails(undefined));
    };
  }, [word]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <DetailsHeader word={word} />
      {wordDetails && wordDetails?.length > 0 && (
        <VStack p={3}>
          <VStack>
            <Text fontSize={"4xl"}>{word}</Text>
          </VStack>
        </VStack>
      )}
      {!isLoading && !wordDetails && (
        <NoContent
          text={`Sorry, but there are no\ndefinitions for this word`}
        />
      )}
      {isLoading && <Loading />}
    </ScrollView>
  );
}
