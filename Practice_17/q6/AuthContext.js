import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider ({children}) {

    const [currentUser, setCurrentUser] = useState(null);

    const login = () => {
    setCurrentUser("Ömer");
  };

  const logout = () => {
    setCurrentUser(null);
  };

    return (
        <AuthContext.Provider value ={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>)

}