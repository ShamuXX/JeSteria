import { createContext, useState } from "react";

const Context = createContext({});

export function ContextAuthProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <Context.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
