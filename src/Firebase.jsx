import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0lK-VuT6zfBzd3mxRkpcF04MevPnC45c",
  authDomain: "livechat-a3502.firebaseapp.com",
  projectId: "livechat-a3502",
  storageBucket: "livechat-a3502.appspot.com",
  messagingSenderId: "836064379488",
  appId: "1:836064379488:web:caa325156a677c09563905",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app)
