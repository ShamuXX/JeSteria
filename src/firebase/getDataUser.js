import { auth, db } from "../firebase/firebaseApp";
import { ref, set } from "firebase/database";

export default function SendData() {
  const uploadData = (user) => {
    set(ref(db, "usuarios/"), {
      name: "user.displayName",
      email: user.email,
      uid: user.uid,
    });
  };

  return {
    uploadData,
  };
}
