import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDV-MNiA_YqFFQJHMkiy7BJt4pd_tL1OS4",
  authDomain: "myblog-708a5.firebaseapp.com",
  databaseURL: "https://myblog-708a5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myblog-708a5",
  storageBucket: "myblog-708a5.appspot.com",
  messagingSenderId: "480278508141",
  appId: "1:480278508141:web:4aa7db6bd11063e75c8564",
  measurementId: "G-ERC1WK7B73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { app };