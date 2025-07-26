import { useContext } from "react"
import {AuthContext} from "./AuthContext"

export default function Header() {

    const { currentUser, login, logout } = useContext(AuthContext);

    return (
      <header>
        <p>{currentUser}</p>
        { currentUser 
          ?
          <button onClick={logout}>Log out</button>
          :
          <button onClick={login}>Log in</button>  
        }
      </header>
    )
  }