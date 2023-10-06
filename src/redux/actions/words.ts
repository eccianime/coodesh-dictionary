import { createAsyncThunk } from "@reduxjs/toolkit";
import { arrayUnion, doc, setDoc } from "firebase/firestore";
import { RootState } from "..";
import { DICTIONARY_URL, WORDS_URL, axiosRequest } from "../../config/axios";
import { db } from "../../config/firebase";
import { WordDetailsProps } from "../../types";
import { AsyncGet, AsyncStore } from "../../utils/storage";
import { setLoading } from "../slices/appSlice";
import { setWordDetails, setWords } from "../slices/wordsSlice";

export const getWords = createAsyncThunk(
  "words/getWords",
  async (payload: { currentPage: number }, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const { currentPage } = payload;

      let wordList: string[] = [];
      wordList = (await AsyncGet("wordList")) as string[];

      if (!wordList) {
        const resp = await axiosRequest(WORDS_URL);
        const newCacheWordList = Object.keys(resp);
        await AsyncStore("wordList", newCacheWordList);
        wordList = newCacheWordList;
      }
      const currentWordList = (thunkAPI.getState() as RootState).words.words;
      const nextList = wordList.slice(currentPage * 30, (currentPage + 1) * 30);
      const updatedWordList = [...new Set(currentWordList.concat(nextList))];
      thunkAPI.dispatch(setWords(updatedWordList));
    } catch (error) {
      console.log(error);
    }
  }
);

export const getWordDetails = createAsyncThunk(
  "word/getWordDetails",
  async (payload: { word: string }, thunkAPI) => {
    try {
      const {
        account: { currentUser },
      } = thunkAPI.getState() as RootState;
      thunkAPI.dispatch(setLoading(true));
      const { word } = payload;

      let pastWords: { word: string; details: WordDetailsProps[] }[] = [];
      let targetWordDetails: WordDetailsProps[] = [];

      const cachedWords = await AsyncGet("pastWords");
      if (cachedWords) {
        pastWords = cachedWords;
      }
      const targetPastWord = pastWords.find((pw) => pw.word === word);
      if (targetPastWord) {
        targetWordDetails = targetPastWord.details;
      } else {
        targetWordDetails = await axiosRequest(DICTIONARY_URL + word);
        await AsyncStore("pastWords", [
          ...pastWords,
          { word, details: targetWordDetails },
        ]);
        if (currentUser) {
          const docRef = doc(db, "users", currentUser.uid);
          await setDoc(
            docRef,
            {
              history: arrayUnion(word),
            },
            { merge: true }
          );
        }
      }

      thunkAPI.dispatch(setWordDetails(targetWordDetails));
    } catch (error) {
      console.log(error);
    }
  }
);
