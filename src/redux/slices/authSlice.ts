import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { type RootState } from "..";
import { AuthState } from "../../types";

const initialState: AuthState = {
  currentUser: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<boolean>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;

export const authSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
