import { Header } from "./Components/Header";
import { Sidebar} from "./Components/Sidebar";
import { Post } from "./Components/Post";
import './global.css';
import styles from './App.module.css';

const posts = [
 {
  id: 1,
  author: {
    avatarUrl: 'https://github.com/santirequelme.png',
    name: 'Santiago Requelme',
    role: 'Frontend Developer'
  },
  content: [
    { type: 'paragraph', content:'Fala Galera! 👋👋👋' },
    { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portfolio' },
    { type: 'link', content: 'jane.design/doctorcare'}
  ],
  publishedAt: new Date ('2022-07-18 08:00:00'),
 },
 {
  id: 2,
  author: {
    avatarUrl: 'https://github.com/diego3g.png',
    name: 'Diego Fernandes',
    role: 'CTO @Rocketseat'
  },
  content: [
    { type: 'paragraph', content:'Fala Galera!' },
    { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portfolio' },
    { type: 'link', content: 'jane.design/doctorcare'}
  ],
  publishedAt: new Date ('2022-07-19 08:00:00'),
 },
];


export function App() {

  return (
    <div>
    
    <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {posts.map( post =>{
          return (
              <Post
              key={post.id}
              author= {post.author}
              content= {post.content}
              publishedAt = {post.publishedAt}
              />
          )
        })}
        </main>
      </div>
    </div>
  )
}
