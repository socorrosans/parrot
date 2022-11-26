import logo from "../../assets/img/logo-parrot.png";
import "./header.css";
export default function Header(){
  return (
    <div className="box-shadow">
      <header className="container">
        <div>
          <img src={logo} alt="Logo da Parrot" />
        </div>
        <ul>
          <li>Olá, usuário</li>
          <li>Sair</li>
        </ul>
      </header>
    </div>
  )
}