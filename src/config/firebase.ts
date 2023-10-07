import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
import {
  Auth,
  getAuth,
  inMemoryPersistence,
  initializeAuth,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBwZVM8PcbhDEAMN5ooAExaaDaqW0om5B8",
  authDomain: "coodesh-dictionary.firebaseapp.com",
  projectId: "coodesh-dictionary",
  storageBucket: "coodesh-dictionary.appspot.com",
  messagingSenderId: "294532728508",
  appId: "1:294532728508:web:b2ba16adc628279758f2b9",
};

let app: FirebaseApp;
let auth: Auth;
if (getApps().length < 1) {
  app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: inMemoryPersistence,
  });
} else {
  app = getApp();
  auth = getAuth();
}

const storage = getStorage(app);
const db = getFirestore(app);
export { app, auth, storage, db };
