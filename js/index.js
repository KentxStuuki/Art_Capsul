// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXsc7jpl2aILSVRRbrmP_kjcLt0r0UFMY",
    authDomain: "artcapsul-c6ef2.firebaseapp.com",
    projectId: "artcapsul-c6ef2",
    storageBucket: "artcapsul-c6ef2.firebasestorage.app",
    messagingSenderId: "816608642588",
    appId: "1:816608642588:web:5846f32a4a08cdb83941d9",
    measurementId: "G-JTCLXJMMQC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);