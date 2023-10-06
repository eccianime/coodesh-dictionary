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
