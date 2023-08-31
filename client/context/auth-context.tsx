import { PropsWithChildren, createContext, useContext, useState } from 'react';

const defaultValue = {};

const AuthContext = createContext(defaultValue);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState();

  return (
    <AuthContext.Provider value={{ mode }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
