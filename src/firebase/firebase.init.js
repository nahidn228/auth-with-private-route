// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx8XryY0_iNDmJu6IW6E4N1FtBp_1MoIg",
  authDomain: "private-route-e61d1.firebaseapp.com",
  projectId: "private-route-e61d1",
  storageBucket: "private-route-e61d1.firebasestorage.app",
  messagingSenderId: "302907959247",
  appId: "1:302907959247:web:eb167911eb2465887914ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
