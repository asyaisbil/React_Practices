import React from "react";
import Header from "./Header.js"
import AuthContextProvider from "./AuthContext.js"

export default function App() {

    const { currentUser, login, logout } = useContext(AuthContext);
  return <>
  
    <AuthContextProvider >
      <Header /> 
      <div>
      <h1>Context API Best Practice</h1>
    </div>
    </AuthContextProvider>
  </>
}
