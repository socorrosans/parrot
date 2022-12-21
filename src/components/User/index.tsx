import userPic from '../../assets/images/user.png';
import './user.css';

interface PropsUser {
  name: string,
  apartment: string,
  email: string,
  posts?: string
}

export default function User(p: PropsUser){
  return(
    <div className="user">
      <img src={userPic} alt="Foto de perfil do usuário"/>
      <div className='u-info'>
        <h1>{p.name}</h1>
        <span>{`apê ${p.apartment}`}</span>
        <span>{p.email}</span>
        {p.posts && <span>publicações: <span className="qntPosts">{p.posts}</span></span>}
      </div>
    </div>
  )
}