import ButtonLogin from "../../components/Buttons/ButtonLogin";
import logo from "../../assets/img/logo-box.png";
import "./login.css";

export default function Login(){
  return(
    <div className="bg">
      <section className="container">
        <div>
          <img src={logo} alt="Logo da Parrot" />
        </div>

        <h1>LOGIN</h1>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="senha" />
        <ButtonLogin />

        <a href="">cadastre-se</a>
      </section>
    </div>
  )
}