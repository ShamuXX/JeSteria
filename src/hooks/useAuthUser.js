import { useEffect, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../firebase/firebaseApp";

export const useAuthUser = () => {
  const { push, pathname } = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const userLogged = user !== null;
      
      if (!userLogged) {
        push("/login");
      } else {
        if (pathname === "/login") {
          push("/");
        }
      }
    });
  }, []);
};
