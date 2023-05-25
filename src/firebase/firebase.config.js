// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAd-GTUth0uqtDP_J5grIZjY9FvU7HQGSc",
    authDomain: "dragon-news-auth-e0445.firebaseapp.com",
    projectId: "dragon-news-auth-e0445",
    storageBucket: "dragon-news-auth-e0445.appspot.com",
    messagingSenderId: "186154810677",
    appId: "1:186154810677:web:4c4886847da3118d07a07c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;