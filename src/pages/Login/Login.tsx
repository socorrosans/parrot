import Background from "../../components/Background/Background";
import { ButtonLogin } from "../../components/Buttons/Buttons";
import logo from "../../assets/img/logo-box.png";
import "./login.css";

export default function Login(){
  return(
    <Background>
      <section className="container">
        <div>
          <img src={logo} alt="Logo da Parrot" />
        </div>

        <h1>LOGIN</h1>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="senha" />
        <ButtonLogin />

        <a href="/cadastrar">cadastre-se</a>
      </section>
    </Background>
  )
}