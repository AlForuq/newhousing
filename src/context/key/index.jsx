import React, { createContext, useState } from "react";

export const KeyContext = createContext();

const KeyProvider = ({ children }) => {
  const [key, setKey] = useState('1');
  return (
    <KeyContext.Provider value={[key, setKey]}>{children}</KeyContext.Provider>
  );
};

export default KeyProvider;
