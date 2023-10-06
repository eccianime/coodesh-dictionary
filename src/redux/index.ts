import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import accountReducer from "./slices/accountSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    account: accountReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from "./slices/appSlice";
export * from "./slices/accountSlice";

export * from "./actions/auth";
