import User1 from '../../assets/images/img-users/user1.png';
import './post.css';

export default function Post(){
  return(
    <div className="post">
      <img src={User1} alt="Foto de perfil do usuário" />
      <div className="info-user">
        <h1>Vinícius - apê 42</h1>
        <span>10/06/2022 09:00</span>
        <p>Poxa galera, vamos respeitar o horário de silêncio! Tinha alguém usando furadeira 2 HORAS DA MANHÃ!!! ó_ó</p>
      </div>
    </div>
  )
}