import Background from '../../components/Background/Background';
import { ButtonLogin } from '../../components/Buttons/Buttons';
import logo from '../../assets/images/general/logo-box.png';
import '../Login/login.css';

export default function Register(){
  return (
    <Background>
      <section className="container">
        <div>
          <img src={logo} alt="Logo da Parrot" />
        </div>

        <h1>CADASTRO</h1>
        <form>
          <input type="text" placeholder="nome" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="senha" />
          <input type="password" placeholder="confirmar senha" />
          <input type="text" placeholder="apartamento" />
          <input type="text" placeholder="link da foto" />
          <ButtonLogin />
        </form>
      </section>
    </Background>
  )
}