import ContainerMain from '../../components/Containers';
import Header from '../../components/Header';
import userPic from '../../assets/images/user.png';
import { ButtonProfile } from '../../components/Buttons';
import Post from '../../components/Post';
import { api } from '../../services/API';
import { useEffect, useState } from 'react';
import './feed.css';

export default function Feed(){

  interface Post {
    owner: string,
    email: string,
    apartment: string,
    post: string,
    created: string
  }

  const [text, setText] = useState("")
  const [posts, setPosts] = useState<Post[]>([]);
  const [emptyPosts, setEmptyPosts] = useState<string>();

  useEffect(() => {
    api.get('/feed', {
      headers: {
        "Authorization": localStorage.token
      }
    })
      .then(r => {
        if (typeof r.data == "string") {setEmptyPosts(r.data)}
          else {setPosts(r.data)}
      }).catch(e => console.log(e))
  }, [])

  async function handleClick(){
    await api.post('posts', {
      "post_content": text
    }, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Authorization": localStorage.token,
    }}).then(r => setText("")).catch(e => console.log(e))
  }

  return(
    <>
      <Header user={localStorage.user}/>
      <ContainerMain>
        <div className="post-area">
          <img src={userPic} alt="Foto de perfil do usuário" />
          <textarea value={text} onChange={e => setText(e.target.value)}></textarea>
          <ButtonProfile name="publicar" onclick={handleClick}/>
        </div>
        
        <>
        { 
          posts && posts.map((p, i)=> <Post key={i} owner={p.owner} post={p.post} apartment={p.apartment} created={p.created} />)
        }
        {
          emptyPosts && <p style={{"textAlign": "center", "marginTop": "20px"}}>{emptyPosts}</p>
        }
        </>

      </ContainerMain>
    </>
  )
}