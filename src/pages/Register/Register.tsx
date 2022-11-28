import Background from "../../components/Background/Background";
import ButtonLogin from "../../components/Buttons/ButtonLogin";
import logo from "../../assets/img/logo-box.png";
import "../Login/login.css";

export default function Register(){
  return (
    <Background>
      <section className="container">
        <div>
          <img src={logo} alt="Logo da Parrot" />
        </div>

        <h1>CADASTRO</h1>
        <input type="email" placeholder="nome" />
        <input type="password" placeholder="email" />
        <input type="password" placeholder="senha" />
        <input type="password" placeholder="confirmar senha" />
        <input type="password" placeholder="apartamento" />
        <input type="password" placeholder="link da foto" />
        <ButtonLogin />
      </section>
    </Background>
  )
}