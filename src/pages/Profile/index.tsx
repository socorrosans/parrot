import { useState, useEffect } from 'react';
import ContainerMain from '../../components/Container';
import Header from '../../components/Header';
import Post from '../../components/Post';
import User from '../../components/User';
import { api } from '../../services/API';
import './profile.css';

interface Post {
  owner: string,
  email: string,
  apartment: string,
  post: string,
  created: string
}

export default function Profile(){
  const [posts, setPosts] = useState<Post[]>([]);
  const [emptyPosts, setEmptyPosts] = useState("");

  useEffect(() => {
    api.get('/user', {
      headers: {
        "Authorization": localStorage.token
      }
    }).then(r => {
      if (typeof r.data === "string") {
        setEmptyPosts(r.data);
      } else {
        setPosts(r.data);
      }
    }).catch(e => console.log(e))
  }, [])

  return(
    <>
      <Header user={localStorage.user}/>
      <ContainerMain>
        <User name={localStorage.user} apartment={localStorage.apartment} email={localStorage.email} posts={(posts.length != 0)? String(posts.length) : ""}/>
        <>
        {
          posts && posts.map((p, i) => <Post key={i} owner={p.owner} post={p.post} apartment={p.apartment} created={p.created} />)
        }

        {
          emptyPosts && <p className="no-posts">{"Você ainda não fez nenhuma publicação :("}</p>
        }
        </>
      </ContainerMain>
    </>
  )
}