import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import accountReducer from "./slices/accountSlice";
import wordsReducer from "./slices/wordsSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    account: accountReducer,
    words: wordsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from "./slices/appSlice";
export * from "./slices/accountSlice";
export * from "./slices/wordsSlice";

export * from "./actions/auth";
export * from "./actions/words";
