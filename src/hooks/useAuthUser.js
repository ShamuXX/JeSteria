import { useEffect, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../firebase/firebaseApp";
import AuthContext from "../context/AuthContext";

export const useAuthUser = () => {
  const { push, pathname } = useRouter();

  const { setisLogged } = useContext(AuthContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      let userLogged = user === null ? false : true;

      if (!userLogged) {
        push("/login");
        setisLogged(false);
      } else {
        setisLogged(true);
        if (pathname === "/login") {
          push("/");
        }
      }
    });
  }, []);
};
