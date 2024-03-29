import Background from '../../components/Background';
import Button from '../../components/Button';
import logo from '../../assets/images/logo-box.png';
import { useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { api } from '../../services/API';
import '../Login/login.css';

export default function Register(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword]= useState("");
  const [apartment, setApartment] = useState("");
  const [linkPhoto, setLinkPhoto] = useState("");
  const [wrongPassword, setWrongPassword] = useState("");
  const [userRegister, setUserRegister] = useState("");
  const navigate = useNavigate();
  
  async function handleSubmit(e: FormEvent){
    e.preventDefault();
    if (password === verifyPassword) {
      await api.post('/register', {
        name,
        email,
        password,
        apartment,
        link_photo: linkPhoto
      }, {
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      }).then(r => {
        navigate("/");
      }).catch(e => setUserRegister(`${e.response.data}, tente um novo email!`))
    } else {
      setWrongPassword("As senhas são diferentes")
    }
  }

  return (
    <Background>
      <section className="container">
        <div>
          <a href="/"><img src={logo} alt="Logo da Parrot" /></a>
        </div>

        <h1>CADASTRO</h1>
        <form onSubmit={handleSubmit}>
          <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="nome" />
          <input value={email} onChange={e => {setEmail(e.target.value); setUserRegister("")}} type="email" placeholder="email" />
          <input value={password} minLength={6} maxLength={8} onChange={e => {setPassword(e.target.value); setWrongPassword("")}} type="password" placeholder="senha" />
          <input value={verifyPassword} minLength={6} maxLength={8} onChange={e => {setVerifyPassword(e.target.value); setWrongPassword("")}} type="password" placeholder="confirmar senha" />
          <input value={apartment} maxLength={3} onChange={e => setApartment(e.target.value)} type="text" placeholder="apartamento" />
          <input value={linkPhoto} onChange={e => setLinkPhoto(e.target.value)} type="text" placeholder="link da foto" style={{"display": "none"}}/>
          <Button classname="btn-login" type="submit" name="entrar"/>
          <>
          {
            wrongPassword && <p>{wrongPassword}</p>
          }
          {
            userRegister && <p>{userRegister}</p>
          }
          </>
        </form>
      </section>
    </Background>
  )
}