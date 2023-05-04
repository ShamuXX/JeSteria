import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//Export function to initialize firebase.

export { auth };
