import ContainerMain from "../../components/Containers/ContainerMain";
import Header from "../../components/Header/Header";
import User1 from "../../assets/img-users/user1.png";
import { ButtonProfile } from "../../components/Buttons/Buttons";
import "./feed.css";

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
      </ContainerMain>
    </>
  )
}