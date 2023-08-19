import { useEffect, useContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../firebase/firebaseApp";
import AuthContext from "../context/AuthContext";

export const useAuthUser = () => {
  const { push, pathname } = useRouter();
  const { setIsLogged } = useContext(AuthContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const userLogged = user !== null;
      setIsLogged(userLogged);
      if (!userLogged) {
        push("/Login");
      } else if (pathname === "/login") {
        push("/");
      }
    });
  }, [pathname, push, setIsLogged]);
};
