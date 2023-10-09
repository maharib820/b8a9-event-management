// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4dIRgcBB8f3G9cKNn2tCx3Bywt-Dh5EQ",
  authDomain: "bright-social-events.firebaseapp.com",
  projectId: "bright-social-events",
  storageBucket: "bright-social-events.appspot.com",
  messagingSenderId: "480129444412",
  appId: "1:480129444412:web:424bad4afbcd2015043139"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;