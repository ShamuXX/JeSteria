import { createContext, useState } from "react";

const Context = createContext({});

export function ContextAuthProvider({ children }) {
  return (
    <Context.Provider>
      {children}
    </Context.Provider>
  );
}

export default Context;
