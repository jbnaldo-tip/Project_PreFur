import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDN5jNkVISEKZpwrYoZ3KF1-jRtUp312z4",
  authDomain: "prefurdatabase.firebaseapp.com",
  projectId: "prefurdatabase",
  storageBucket: "prefurdatabase.appspot.com",
  messagingSenderId: "762999611062",
  appId: "1:762999611062:web:987854ea54625bd9bd5017",
  measurementId: "G-E2NWP67ZT7"
};


const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);

export { app, db };
// export default app;
