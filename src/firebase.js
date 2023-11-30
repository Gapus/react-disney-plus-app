// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_stppaRcN-0DvCZ2Ne70mYECg6RB51dA",
  authDomain: "react-disney-plus-app-d5f42.firebaseapp.com",
  projectId: "react-disney-plus-app-d5f42",
  storageBucket: "react-disney-plus-app-d5f42.appspot.com",
  messagingSenderId: "739274696981",
  appId: "1:739274696981:web:d4537906bd047fa709e11c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
