import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD0kzbF0nZ2IzNScz1DDD-gyLw_T1cWaF4",
    authDomain: "jacaranda-app-7fde8.firebaseapp.com",
    projectId: "jacaranda-app-7fde8",
    storageBucket: "jacaranda-app-7fde8.appspot.com",
    messagingSenderId: "953289343234",
    appId: "1:953289343234:web:1de7eff169ee9c6bc6c21b"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);