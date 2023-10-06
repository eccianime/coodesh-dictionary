import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import { WORDS_URL, axiosRequest } from "../../config/axios";
import { AsyncGet, AsyncStore } from "../../utils/storage";
import { setWords } from "../slices/wordsSlice";
import { setLoading } from "../slices/appSlice";

export const getWords = createAsyncThunk(
  "words/getWords",
  async (payload: { currentPage: number }, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      console.log("entra aqui");
      const { currentPage } = payload;

      let wordList: string[] = [];
      wordList = (await AsyncGet("wordList")) as string[];

      if (!wordList) {
        const resp = await axiosRequest(WORDS_URL);
        const newCacheWordList = Object.keys(resp);
        await AsyncStore("wordList", newCacheWordList);
        wordList = newCacheWordList;
      }
      console.log("wordList: ", wordList.length);
      const currentWordList = (thunkAPI.getState() as RootState).words.words;
      console.log("currentWordList: ", currentWordList.length);
      const nextList = wordList.slice(currentPage * 50, (currentPage + 1) * 50);
      const updatedWordList = [...new Set(currentWordList.concat(nextList))];
      thunkAPI.dispatch(setWords(updatedWordList));
    } catch (error) {
      console.log(error);
    }
  }
);
