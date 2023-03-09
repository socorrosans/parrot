import { Background, Button } from '../../components';
import logo from '../../assets/images/logo-box.png';
import { useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { api } from '../../services/API';
import './login.css';

export default function Login(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authUser, setAuthUser] = useState<string | null>(null);
  const navigate = useNavigate();
 
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    await api.post('/login', {
      email,
      password
    }, {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then(r => {
      localStorage.token = r.data.token;
      localStorage.id = r.data.id;
      localStorage.user = r.data.user;
      localStorage.email = r.data.email;
      localStorage.apartment = r.data.apartment;
      if(localStorage.token != null) navigate("/feed");
    })
    .catch(e => setAuthUser(e.response.data))
  }
  
  return(
      <Background>
        <section className="container">
          <div>
            <img src={logo} alt="Logo da Parrot" />
          </div>
          <h1>LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <input type="email" value={email} placeholder="email" onChange={e => {setEmail(e.target.value); setAuthUser(null)}} />
            <input type="password" minLength={6} maxLength={8} value={password} placeholder="senha" onChange={e => {setPassword(e.target.value); setAuthUser(null)}} />
            <Button classname="btn-login" type="submit" name="entrar"/>
          </form>
          {authUser? <p>{`${authUser}`}</p>: null}
          <a href="/cadastrar">cadastre-se</a>
        </section>
      </Background>
  )
}