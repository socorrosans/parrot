import {Header, Button, Post, Container} from '../../components';
import user from '../../assets/images/user.png';
import { useEffect, useState } from 'react';
import { api } from '../../services/API';
import './feed.css';

interface Post {
  owner: string,
  email: string,
  apartment: string,
  post: string,
  created: string
}

export default function Feed(){
  const [text, setText] = useState("")
  const [posts, setPosts] = useState<Post[]>([]);
  const [emptyPosts, setEmptyPosts] = useState("");

  useEffect(() => {
    api.get('/feed', {
      headers: {
        "Authorization": localStorage.token
      }
    })
      .then(r => {
        if (typeof r.data === "string") {
          setEmptyPosts(r.data);
        } else {
          setPosts(r.data);
        }
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
      <Container>
        <div className="post-area">
          <img src={user} alt="Foto de perfil do usuário" />
          <textarea value={text} onChange={e => setText(e.target.value)}></textarea>
          <Button classname="btn-profile" type="submit" name="publicar" onclick={handleClick}/>
        </div>
        <>
        { 
          posts && posts.map((p, i)=> <Post key={i} owner={p.owner} post={p.post} apartment={p.apartment} created={p.created} />)
        }
        {
          emptyPosts && <p style={{"textAlign": "center", "marginTop": "20px"}}>{emptyPosts}</p>
        }
        </>
      </Container>
    </>
  )
}