// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD829tgueyjWocH0TYnEyIov2l0ee8h2k",
  authDomain: "movie-81019.firebaseapp.com",
  projectId: "movie-81019",
  storageBucket: "movie-81019.appspot.com",
  messagingSenderId: "201825997653",
  appId: "1:201825997653:web:bf7c2faeef9faaa3c095dc",
  measurementId: "G-TNC4PCPTN2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
