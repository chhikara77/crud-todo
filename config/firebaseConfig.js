// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyBtFlRiNxK9FT4duM7CqHJnOWxhRKRwBzQ",
  // authDomain: "friendlyeats-d5f51.firebaseapp.com",
  // projectId: "friendlyeats-d5f51",
  // storageBucket: "friendlyeats-d5f51.appspot.com",
  // messagingSenderId: "1072284530247",
  // appId: "1:1072284530247:web:90f5eb08a73aaa570d2362"
  apiKey: "AIzaSyBs0Gqkifmf5qOJaI4INjr5ziMhde02z0I",
  authDomain: "antwalk-9ef83.firebaseapp.com",
  projectId: "antwalk-9ef83",
  storageBucket: "antwalk-9ef83.appspot.com",
  messagingSenderId: "556715042715",
  appId: "1:556715042715:web:c11df493118e600c17633e",
  measurementId: "G-S6V0C2BED4"
};

// Initialize Firebase
export default firebaseConfig
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

