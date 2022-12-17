import ContainerMain from '../../components/Containers';
import Header from '../../components/Header';
import User1 from '../../assets/images/user1.png';
import { ButtonProfile } from '../../components/Buttons';
import './feed.css';
import Post from '../../components/Post';

export default function Feed(){
  return(
    <>
      <Header/>
      <ContainerMain>
        <div className="post-area">
          <img src={User1} alt="Foto de perfil do usuário" />
          <textarea></textarea>
          <ButtonProfile name="publicar"/>
        </div>
        
        <Post/>
      </ContainerMain>
    </>
  )
}