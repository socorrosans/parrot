import Background from '../../components/Background/Background';
import { ButtonLogin } from '../../components/Buttons/Buttons';
import logo from '../../assets/images/general/logo-box.png';
import { FormEvent, useState } from 'react';
import './login.css';

export default function Login(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dataUser = {email, password}

  function handleSubmit(e: FormEvent){
    e.preventDefault()
  }

  return(
    <Background>
      <section className="container">
        <div>
          <img src={logo} alt="Logo da Parrot" />
        </div>

        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" value={email} placeholder="email" onChange={e => setEmail(e.target.value)} />
          <input type="password" value={password} placeholder="senha" onChange={e => setPassword(e.target.value)}/>
          <ButtonLogin />
        </form>
        <a href="/cadastrar">cadastre-se</a>
      </section>
    </Background>
  )
}