import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyC8sGSHAWIkG7Jq7DPXg7II1dgFCXZ4_TU",
    authDomain: "train-e7f95.firebaseapp.com",
    databaseURL: "https://shool-70ffb-default-rtdb.firebaseio.com/",
    projectId: "train-e7f95",
    storageBucket: "train-e7f95.appspot.com",
    messagingSenderId: "1052862647968",
    appId: "1:1052862647968:web:0d67b008281f1919ca43c5",
    measurementId: "G-925WN7STJZ"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);