import styles from './Sidebar.module.css';
import capa from '../assets/capa.svg' 
import { Avatar } from './Avatar';
import { PencilLine } from 'phosphor-react'
export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={capa} />

      <div className={styles.profile}>
        <Avatar hasBorder={true} src="https://avatars.githubusercontent.com/u/65666330?v=4"/>

        <strong>Santi Requelme</strong>
        <span>Frontend developer</span>
      </div>

      <footer>
        <a href="#">
         <PencilLine size={20}/> 
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}