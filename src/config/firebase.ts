import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
import {
  Auth,
  getAuth,
  inMemoryPersistence,
  initializeAuth,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBwZVM8PcbhDEAMN5ooAExaaDaqW0om5B8",
  authDomain: "coodesh-dictionary.firebaseapp.com",
  projectId: "coodesh-dictionary",
  storageBucket: "coodesh-dictionary.appspot.com",
  messagingSenderId: "294532728508",
  appId: "1:294532728508:web:b2ba16adc628279758f2b9",
};

// const app = initializeApp(firebaseConfig);
// const auth = ini(app);
// const storage = getStorage(app);

// export { app, auth, storage };

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

const db = getFirestore(app);
export { app, auth, db };
