import { useState } from 'react';

export default function Login() {

    const [email, setEmail] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log(email);
        setEmail("");
    }

    function handleChange(event) {
        setEmail(event.target.value);

    }

    return (<form onSubmit ={handleSubmit}>
      <h1>Register to Newsletter</h1>
      <label>Email: </label>
      <input id="email" name ="email" type="email" value={email} onChange={handleChange}/> 
      <button>Kayıt</button>
    </form>)
  }