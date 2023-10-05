import database from "./firebaseApp";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  query,
  getDocs,
} from "firebase/firestore";
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
  const getDataActivity = async () => {
    try {
      const userId = getAuth().currentUser.uid;
      const usuariosCollectionRef = collection(database, "usuarios");

      const activitiesQuery = query(
        collection(usuariosCollectionRef, userId, "activities")
      );

      const querySnapshot = await getDocs(activitiesQuery);

      const activitiesData = querySnapshot.docs.map((doc) => doc.data());
      console.log(activitiesData);

      return activitiesData;
    } catch (error) {
      console.error("Error al obtener documentos de actividades: ", error);
      throw error;
    }
  };

  return {
    addUserDocument,
    addActivity,
    getDataActivity,
  };
}
