import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../config/firebase";
import FirebaseErrorMessages from "../../config/firebaseAuthErrorCodes.json";
import { registerSchema } from "../../types";
import { setUser } from "../slices/accountSlice";
import { setLoading, setModal } from "../slices/appSlice";

export const registerAction = createAsyncThunk(
  "auth/register",
  async (payload: { email: string; password: string }, thunkAPI) => {
    const { email, password } = payload;
    try {
      thunkAPI.dispatch(setLoading(true));
      await registerSchema.validate(payload);
      const resp = await createUserWithEmailAndPassword(auth, email, password);
      thunkAPI.dispatch(
        setModal({
          isVisible: true,
          text: "Great! You registered in the app, you're being logged in",
          type: "success",
        })
      );
      thunkAPI.dispatch(
        setUser({
          uid: resp.user.uid,
          email,
        })
      );
    } catch (error: any) {
      let targetMessage = "";
      if (error.code) {
        targetMessage =
          FirebaseErrorMessages.find((fem) => fem.code === error.code)
            ?.description || "";
      } else if (error.value) {
        targetMessage = error.message;
      }

      thunkAPI.dispatch(
        setModal({
          isVisible: true,
          text:
            targetMessage ||
            "Unknown error, please contact the developer team.",
          type: "error",
        })
      );
    }
  }
);

export const loginAction = createAsyncThunk(
  "auth/login",
  async (payload: { email: string; password: string }, thunkAPI) => {
    const { email, password } = payload;
    try {
      thunkAPI.dispatch(setLoading(true));
      const resp = await signInWithEmailAndPassword(auth, email, password);
      thunkAPI.dispatch(
        setUser({
          uid: resp.user.uid,
          email,
        })
      );
    } catch (error: any) {
      const targetMessage =
        FirebaseErrorMessages.find((fem) => fem.code === error.code)
          ?.description || "";

      thunkAPI.dispatch(
        setModal({
          isVisible: true,
          text:
            targetMessage ||
            "Unknown error, please contact the developer team.",
          type: "error",
        })
      );
    }
  }
);

export const logoutAction = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    await signOut(auth);
    thunkAPI.dispatch(setUser(undefined));
  }
);
