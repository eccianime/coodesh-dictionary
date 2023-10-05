import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { type RootState } from "..";
import { AccountState } from "../../types";

const initialState: AccountState = {
  history: [],
  favorites: [],
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setHistory: (state, action: PayloadAction<any[]>) => {
      state.history = action.payload;
    },
    setFavorites: (state, action: PayloadAction<any[]>) => {
      state.favorites = action.payload;
    },
  },
});

export const { setFavorites, setHistory } = accountSlice.actions;

export const accountSelector = (state: RootState) => state.account;

export default accountSlice.reducer;
