// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCH-ehJWN8sZkb2sChEL2EBpcVSRCRbU3g",
    authDomain: "royal-cars-client.firebaseapp.com",
    projectId: "royal-cars-client",
    storageBucket: "royal-cars-client.appspot.com",
    messagingSenderId: "846882529729",
    appId: "1:846882529729:web:db495775bc9ebba6d70f40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;


// apiKey: "AIzaSyCH-ehJWN8sZkb2sChEL2EBpcVSRCRbU3g",
// authDomain: "royal-cars-client.firebaseapp.com",
// projectId: "royal-cars-client",
// storageBucket: "royal-cars-client.appspot.com",
// messagingSenderId: "846882529729",
// appId: "1:846882529729:web:db495775bc9ebba6d70f40"

// apiKey: process.env.REACT_APP_apiKey,
// authDomain: process.env.REACT_APP_authDomain,
// projectId: process.env.REACT_APP_projectId,
// storageBucket: process.env.REACT_APP_storageBucket,
// messagingSenderId: process.env.REACT_APP_messagingSenderId,
// appId: process.env.REACT_APP_appId