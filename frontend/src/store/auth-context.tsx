import React from "react";
import { PropsWithChildren, useState } from "react";

export const AuthContext = React.createContext({
  accessToken: "",
  roles: [],
  setAccessToken: (token: string) => {},
  setRoles: (roles: number[]) => {},
  isLoggedIn: false,
});

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [accessToken, setAccessToken] = useState("");
  const [roles, setRoles] = useState([]);

  const contextValue = {
    accessToken,
    roles,
    setAccessToken: (token: string) => setAccessToken(token),
    // TODO: roles: number[] is not working
    setRoles: (roles: any) => setRoles(roles),
    isLoggedIn: !!accessToken,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
