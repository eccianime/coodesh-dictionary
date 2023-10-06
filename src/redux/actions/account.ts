import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { RootState, setFavorites, setHistory, setLoading } from "..";
import { db } from "../../config/firebase";

export const getHistoryAction = createAsyncThunk(
  "account/getHistory",
  async (_, thunkAPI) => {
    const { currentUser } = (thunkAPI.getState() as RootState).account;
    try {
      thunkAPI.dispatch(setLoading(true));
      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        let words: string[] = [];
        const data = docSnap.data();
        if (data) {
          words = data?.history || [];
        }
        thunkAPI.dispatch(setHistory(words));
      }
    } catch (error) {
      thunkAPI.dispatch(setHistory([]));
      console.log(error);
    }
  }
);

export const getFavoritesAction = createAsyncThunk(
  "account/getFavorites",
  async (_, thunkAPI) => {
    const { currentUser } = (thunkAPI.getState() as RootState).account;
    try {
      thunkAPI.dispatch(setLoading(true));
      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        let words: string[] = [];
        const data = docSnap.data();
        if (data) {
          words = data?.favorites || [];
        }
        thunkAPI.dispatch(setFavorites(words));
      }
    } catch (error) {
      thunkAPI.dispatch(setFavorites([]));
      console.log(error);
    }
  }
);

export const addFavoriteAction = createAsyncThunk(
  "account/addFavorite",
  async (payload: { word: string; isFavorite: boolean }, thunkAPI) => {
    const { word, isFavorite } = payload;
    try {
      thunkAPI.dispatch(setLoading(true));
      const {
        account: { currentUser },
      } = thunkAPI.getState() as RootState;
      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        await setDoc(
          docRef,
          {
            favorites: isFavorite ? arrayRemove(word) : arrayUnion(word),
          },
          { merge: true }
        );
      }
      thunkAPI.dispatch(getFavoritesAction());
    } catch (error) {
      console.log(error);
    }
  }
);
