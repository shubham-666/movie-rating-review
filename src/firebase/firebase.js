import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAWVwppUxy9RhF8lFaxD8w_UCTcdCbTUVU",
  authDomain: "review-rating-film.firebaseapp.com",
  projectId: "review-rating-film",
  storageBucket: "review-rating-film.appspot.com",
  messagingSenderId: "391702213752",
  appId: "1:391702213752:web:288dce0100a3951e10e98d"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;

