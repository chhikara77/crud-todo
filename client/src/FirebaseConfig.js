import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBtFlRiNxK9FT4duM7CqHJnOWxhRKRwBzQ",
  authDomain: "friendlyeats-d5f51.firebaseapp.com",
  projectId: "friendlyeats-d5f51",
  storageBucket: "friendlyeats-d5f51.appspot.com",
  messagingSenderId: "1072284530247",
  appId: "1:1072284530247:web:90f5eb08a73aaa570d2362"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth}