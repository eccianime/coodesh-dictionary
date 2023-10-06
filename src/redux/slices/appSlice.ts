import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { type RootState } from "..";
import { AppState, ModalProps } from "../../types";

const initialState: AppState = {
  isLoading: false,
  isModalVisible: false,
  modalText: "",
  modalType: "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setModal: (state, action: PayloadAction<ModalProps>) => {
      const { isVisible, text, type } = action.payload;
      state.isLoading = false;
      state.isModalVisible = isVisible;
      state.modalText = text;
      state.modalType = type;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase("account/setUser", (state) => {
        state.isLoading = false;
      })
      .addCase("words/setWords", (state) => {
        state.isLoading = false;
      })
      .addCase("words/setWordDetails", (state) => {
        state.isLoading = false;
      })
      .addCase("account/setHistory", (state) => {
        state.isLoading = false;
      })
      .addCase("account/setFavorites", (state) => {
        state.isLoading = false;
      });
  },
});

export const { setLoading, setModal } = appSlice.actions;

export const appSelector = (state: RootState) => state.app;

export default appSlice.reducer;
