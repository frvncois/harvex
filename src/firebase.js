import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtr2PkBYZ_I-EnNlnpAc5FasiW8sptJB4",
  authDomain: "gcis-511af.firebaseapp.com",
  databaseURL: "https://gcis-511af-default-rtdb.firebaseio.com",
  projectId: "gcis-511af",
  storageBucket: "gcis-511af.appspot.com",
  messagingSenderId: "562816073834",
  appId: "1:562816073834:web:620e60817d5094ac75ca13"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
