import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { type RootState } from "..";
import { WordDetailsProps, WordsState } from "../../types";

const initialState: WordsState = {
  currentPage: 0,
  words: [],
  wordDetails: undefined,
};

export const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setWords: (state, action: PayloadAction<string[]>) => {
      state.words = action.payload;
    },
    setWordDetails: (
      state,
      action: PayloadAction<WordDetailsProps[] | undefined>
    ) => {
      state.wordDetails = action.payload;
    },
  },
});

export const { setCurrentPage, setWords, setWordDetails } = wordsSlice.actions;

export const wordsSelector = (state: RootState) => state.words;

export default wordsSlice.reducer;
