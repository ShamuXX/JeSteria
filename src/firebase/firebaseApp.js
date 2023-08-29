import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGEo-un__FnINmGqeRnexcIdpwQYYYlmU",
  authDomain: "jesteria.firebaseapp.com",
  projectId: "jesteria",
  storageBucket: "jesteria.appspot.com",
  messagingSenderId: "885604013350",
  appId: "1:885604013350:web:93bfd679b9093177619de7",
  measurementId: "G-DMCKXJEZVR",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Initialize Firestore and get a reference to the service
const database = getFirestore(app);

export default database;

//Export function to initialize firebase.
