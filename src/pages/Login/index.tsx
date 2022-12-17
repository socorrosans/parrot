import Background from '../../components/Background';
import { ButtonLogin } from '../../components/Buttons';
import logo from '../../assets/images/logo-box.png';
import { FormEvent, useState } from 'react';
import { api } from '../../services/API';
import AuthContext from '../../components/AuthContext';
import './login.css';

export default function Login(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [authUser, setAuthUser] = useState(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    await api.post('/login', {
      email,
      password
    }, {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then(r => {
      setToken(r.data)
    })
    .catch(e => {
      setAuthUser(e.response.data)
    })
  }
  
  return(
    <AuthContext.Provider value={{token: token}}>
      <Background>
        <section className="container">
          <div>
            <img src={logo} alt="Logo da Parrot" />
          </div>

          <h1>LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <input type="email" value={email} placeholder="email" onChange={e => {setEmail(e.target.value); setAuthUser(null)}} />
            <input type="password" minLength={6} value={password} placeholder="senha" onChange={e => {setPassword(e.target.value); setAuthUser(null)}} />
            <ButtonLogin />
          </form>
          {authUser? <p>{`${authUser}`}</p>: null}
          <a href="/cadastrar">cadastre-se</a>
        </section>
      </Background>
    </AuthContext.Provider>
  )
}