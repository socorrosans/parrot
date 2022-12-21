import userPic from '../../assets/images/user.png';
import './post.css';

interface PropsPost {
  owner: string,
  post: string,
  apartment: string,
  created: string,
}

// const formatDate = "10/06/2022 09:00"

export default function Post(p: PropsPost){

  const createdAt = p.created.split("T").join(" ").slice(0, 16).replace(/-/g, "/");
  return(
    <div className="post">
      <img src={userPic} alt="Foto de perfil do usuário" />
      <div className="info-user">
        <h1>{`${p.owner} - apê ${p.apartment}`}</h1>
        <span>{createdAt}</span>
        <p>{`${p.post}`}</p>
      </div>
    </div>
  )
}