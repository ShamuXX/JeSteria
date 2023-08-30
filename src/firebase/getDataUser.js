import database from "./firebaseApp";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import "firebase/database";
import { getAuth } from "firebase/auth";

export default function getDataUser(data) {
  const addUserDocument = async () => {
    try {
      const userRef = doc(database, "usuarios", data.uid);
      await setDoc(userRef, {
        name: data.displayName,
        email: data.email,
        uid: data.uid,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const addActivity = async () => {
    try {
      const currentUser = getAuth().currentUser;
      const userRef = doc(database, "usuarios", currentUser.uid);
      const activitiesCollectionRef = collection(userRef, "activities");

      await addDoc(activitiesCollectionRef, data);
      console.log("Actividad agregada exitosamente");
    } catch (error) {
      console.log("Error al agregar actividad:", error);
    }
  };

  return {
    addUserDocument,
    addActivity,
  };
}
