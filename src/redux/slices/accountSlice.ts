import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { type RootState } from "..";
import { AccountState, UserProps } from "../../types";

const initialState: AccountState = {
  currentUser: undefined,
  favorites: [],
  history: [],
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserProps | undefined>) => {
      state.currentUser = action.payload;
    },
    setFavorites: (state, action: PayloadAction<string[]>) => {
      state.favorites = action.payload;
    },
    setHistory: (state, action: PayloadAction<string[]>) => {
      state.history = action.payload;
    },
  },
});

export const { setFavorites, setHistory, setUser } = accountSlice.actions;

export const accountSelector = (state: RootState) => state.account;

export default accountSlice.reducer;
