import logo from '../../assets/images/logo-parrot.png';
import './header.css';

interface LoggedUser {
  user: string
}

export default function Header(p: LoggedUser){

  return (
    <div className="header-bg">
      <header className="header container-h">
        <div>
          <img src={logo} alt="Logo da Parrot" />
        </div>
        <ul className="ul-h">
          <li><a href="">{`Olá, ${p.user}`}</a></li>
          <li><a href="/" onClick={()=> localStorage.clear()}>Sair</a></li>
        </ul>
      </header>
    </div>
  )
}