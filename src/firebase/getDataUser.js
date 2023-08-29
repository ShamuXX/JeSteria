import database from "./firebaseApp";
import { doc, setDoc, collection } from "firebase/firestore";
import "firebase/database";

export default function getDataUser(user) {
  console.log(user);
  const addUserDocument = async () => {
    try {
      const userRef = doc(database, "usuarios", user.uid);
      await setDoc(userRef, {
        name: user.displayName,
        email: user.email,
        uid: user.uid,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    addUserDocument,
  };
}
