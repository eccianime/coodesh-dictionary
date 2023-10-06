import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { type RootState } from "..";
import { WordsState } from "../../types";

const initialState: WordsState = {
  currentPage: 0,
  words: [],
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
  },
});

export const { setCurrentPage, setWords } = wordsSlice.actions;

export const wordsSelector = (state: RootState) => state.words;

export default wordsSlice.reducer;
