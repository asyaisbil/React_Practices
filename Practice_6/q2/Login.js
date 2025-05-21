import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  const history= useHistory();

    function handleSubmit(event) {
        event.preventDefault();
        console.log(`Email: ${email}, Password: ${password}`);
        setEmail("");
        setPassword("");
      history.push("/page");
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);        
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value); 
    }

    return (<form onSubmit={handleSubmit}>
      <h1>Login</h1>
        <label>Email: </label>
        <input type="email" value={email} onChange={handleEmailChange}/> 
        <label>Şifre: </label>
        <input type="password" value={password} onChange={handlePasswordChange}/> 
        <button>Giriş</button>
    </form>)
  }
  
